import { PaymentElement, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { usePaymentSuccessMutation } from "../../redux/api/paymentApi";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, { data, error }] = usePaymentSuccessMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);
    elements.submit();
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        shipping: {
          name: "emon",
          address: {
            line1: "1",
            city: "dhaka",
            country: "bangladesh",
          },
        },
        receipt_email: "emon@gmail.com",
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/paymentComplet`,
      },
      redirect: "if_required",
    });

    if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log(paymentIntent, "payment intent line 45");
      console.log(error, "line 46");
      paymentSuccess(paymentIntent);
    }
    if (
      (error && error?.type === "card_error") ||
      error?.type === "validation_error"
    ) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
      console.log(error);
    }

    setIsProcessing(false);
  };

  const appearance = {
    theme: "night",

    variables: {
      colorText: "#30313d",
      colorDanger: "#df1b41",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
      spacingUnit: "2px",
      borderRadius: "4px",
      // See all possible variables below
    },
  };
  return (
    <div className="md:flex md:justify-center  md:items-center h-[70vh]">
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className=" md:w-1/3 bg-white  p-8 rounded mx-auto max-w-md"
      >
        <PaymentElement id="payment-element" />
        <button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          className="px-4 bg-primary py-2 mt-4"
        >
          <span id="button-text">
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div className="text-black" id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
