import React, {Component} from 'react';
import StripeCheckOut from 'react-stripe-checkout';


class Payments extends Component {
      render() {
            return(
                  <StripeCheckOut
                        name = "Emaily"
                        description = "$5 for 5 email credits"
                        amount={500}
                        token = {token => console.log(token)}
                        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                        
                        <button className="btn">Add Credits</button>
                  
                        </StripeCheckOut>
            );
      }
}

export default Payments;