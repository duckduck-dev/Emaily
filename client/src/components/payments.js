import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { handleToken } from '../actions/index';

export default () => {

      const dispatch = useDispatch();

      return(
            <StripeCheckout
                  name="Emaily"
                  description="&#8377;5 for 5 email credits"
                  amount={500}
                  token={token => dispatch(handleToken(token))}
                  stripeKey={process.env.REACT_APP_STRIPE_KEY}
                  currency="INR">
                  <div className="btn red">Add Credits</div>
            </StripeCheckout>
      );
};