import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Payments = () => {
  return (
    <StripeCheckout
      name="Recruiterra"
      description="Add 5 credits to your account"
      amount={500}
      token={token => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button>Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
