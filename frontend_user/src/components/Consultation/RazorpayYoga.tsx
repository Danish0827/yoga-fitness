// utils/loadRazorpayScript.js
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const createOrderId = async (amount: number) => {
  try {
    const response = await fetch("/api/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
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

export const processPayments = async (
  //   name: any,
  //   email: any,
  amount: any,
  description: any
) => {
  try {
    const orderId: string = await createOrderId(amount);
    loadRazorpayScript();
    const options = {
      key: "rzp_test_3fG6M6oW2WxZfq",
      amount: parseFloat(amount) * 100,
      currency: "INR",
      name: "me",
      description: description,
      order_id: orderId,
      handler: async function (response: any) {
        const dataRes = {
          orderCreationId: orderId,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        console.log(dataRes, "dataRes");

        const result = await fetch("/api/verify", {
          method: "POST",
          body: JSON.stringify(dataRes),
          headers: { "Content-Type": "application/json" },
        });
        const res = await result.json();
        if (res.isOk) {
          await sendDatatoDb(dataRes);
          alert("Payment Success");
          window.location.href =
            "https://chat.whatsapp.com/HW7sCTqD31ALYKEj6DKPoV";
        } else {
          alert(res.message);
          return { success: false, message: res.message };
        }
      },
      prefill: {
        name: "danish",
        email: "s.danish@gmail.com",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response: any) {
      alert(response.error.description);
    });
    paymentObject.open();
  } catch (error) {
    console.log(error);
  }
};

export const sendDatatoDb = async (createResponse: any) => {
  const data = localStorage.getItem("formdata");

  if (data) {
    const parsedData = JSON.parse(data); // Parse the data from localStorage

    const formdata = {
      ...parsedData, // Spread the parsed data into the formdata object
      payment_id: createResponse.razorpayPaymentId,
      payment_obj: JSON.stringify(createResponse),
      payment_amount: 500,
      payment_mode: "Razorpay",
      payment_status: "Paid",
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
