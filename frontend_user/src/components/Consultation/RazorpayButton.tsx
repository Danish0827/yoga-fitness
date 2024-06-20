const createOrderId = async () => {
  try {
    // Convert PAYMENT_AMOUNT to a number
    const amount = Number(process.env.PAYMENT_AMOUNT);

    if (isNaN(amount)) {
      throw new Error("Invalid PAYMENT_AMOUNT value");
    }

    const response = await fetch("/api/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to the smallest currency unit
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.orderId;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
};

export const processPayment = async (
  name: any,
  email: any,
  amount: any,
  description: any
) => {
  try {
    const orderId = await createOrderId();
    const options = {
      key: process.env.RAZORPAY_KEY,
      amount: parseFloat(amount) * 100,
      currency: "INR",
      name: name,
      description: description,
      order_id: orderId,
      handler: async function (response: any) {
        const dataRes = {
          orderCreationId: orderId,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await fetch("/api/verify", {
          method: "POST",
          body: JSON.stringify(dataRes),
          headers: { "Content-Type": "application/json" },
        });
        const res = await result.json();
        if (res.isOk) {
          await sendDatatoDb(dataRes, "Paid");
          alert("Payment Success");
          window.location.href = "/consultation";
        } else {
          alert(res.message);
          return { success: false, message: res.message };
        }
      },
      prefill: {
        name: name,
        email: email,
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: async function () {
          console.log("Transaction was cancelled or modal was closed.");
          alert("Transaction cancelled or modal closed");
          await sendDatatoDb(null, "Cancelled");
          window.location.href = "/consultation";
        },
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", async function (response: any) {
      alert(response.error.description);
      await sendDatatoDb(response, "Failed");
    });
    paymentObject.open();
  } catch (error) {
    console.error(error);
  }
};

export const sendDatatoDb = async (createResponse: any, type: string) => {
  const data = localStorage.getItem("formdata");

  if (data) {
    const parsedData = JSON.parse(data); // Parse the data from localStorage

    const formdata = {
      ...parsedData, // Spread the parsed data into the formdata object
      payment_id: createResponse?.razorpayPaymentId || null,
      payment_obj: createResponse ? JSON.stringify(createResponse) : null,
      payment_amount: process.env.PAYMENT_AMOUNT,
      payment_mode: "Razorpay",
      payment_status: type,
      insert: true,
    };

    try {
      // TO DO: Implement API call to check availability
      const res = await fetch(
        `${process.env.ADMINURL}/api/addNewConsultRecord`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      const resData = await res.json();

      // Clear localStorage if the request was successful
      if (res.ok) {
        localStorage.removeItem("formdata");
        return { success: true, data: resData };
      } else {
        return {
          success: false,
          message: "Failed to send data to the server:",
        };
      }

      // You can now send `formdata` to your server or perform any other operations with it.
    } catch (error) {
      return {
        success: false,
        message: "Failed to send data to the server:",
      };
    }
  } else {
    console.error('No data found in localStorage with key "formdata"');
    return {
      success: false,
      message: 'No data found in localStorage with key "formdata"',
    };
  }
};
