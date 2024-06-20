import Swal from "sweetalert2";

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

export const processPayments = async (amount: any, description: any) => {
  try {
    const orderId: string = await createOrderId(amount);
    await loadRazorpayScript();

    const options = {
      key: "rzp_test_3fG6M6oW2WxZfq",
      amount: parseFloat(amount) * 100,
      currency: "INR",
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
          Swal.fire({
            icon: "success",
            title: "Payment Successful",
            text: "Redirecting you to the WhatsApp group...",
            showConfirmButton: false,
            timer: 3000,
            willClose: () => {
              window.location.href =
                "https://chat.whatsapp.com/HW7sCTqD31ALYKEj6DKPoV";
            },
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Payment Failed",
            text: res.message,
          });
          return { success: false, message: res.message };
        }
      },
      prefill: {
        name: "", // Leave empty to prompt user
        email: "", // Leave empty to prompt user
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response: any) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: response.error.description,
      });
    });
    paymentObject.open();
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong. Please try again.",
    });
  }
};
