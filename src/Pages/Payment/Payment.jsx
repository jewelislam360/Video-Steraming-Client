import { useContext, useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { AuthContext } from "../../Provider/AuthProvider";
import { useGetPaymentDocQuery } from "../../redux/api/paymentApi";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const { data } = useGetPaymentDocQuery(user?.email);
  console.log(data)
  useEffect(() => {
    fetch("https://video-streaming-server-sigma.vercel.app/config").then(
      async (r) => {
        const { publishableKey } = await r.json();
        setStripePromise(loadStripe(publishableKey));
      }
    );
  }, []);

  useEffect(() => {
    fetch(
      "https://video-streaming-server-sigma.vercel.app/create-payment-intent",
      {
        method: "POST",
        body: JSON.stringify({}),
      }
    ).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);
  const appearance = {
    theme: "night",
    labels: "floating",

    variables: {
      colorPrimary: "#0570de",
      colorBackground: "#ffffff",
      colorText: "#30313d",
      colorDanger: "#df1b41",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
      spacingUnit: "2px",
      borderRadius: "4px",
      // See all possible variables below
    },
  };
  return (
    <div className="pt-20">
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Payment;
