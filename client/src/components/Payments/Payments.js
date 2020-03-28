import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import RegBtn from "../UI/Btns/RegBtn/RegBtn";

export const PaymentsUnconnected = props => {
	return (
		<StripeCheckout
			name="Recruiterra"
			description="Add 5 credits to your account"
			amount={500}
			token={token => props.handleStripeToken(token)}
			stripeKey={process.env.REACT_APP_STRIPE_KEY}
			data-test="payments"
		>
			<RegBtn data-test="payments-btn">Add Credits</RegBtn>
		</StripeCheckout>
	);
};

export default connect(null, actions)(PaymentsUnconnected);
