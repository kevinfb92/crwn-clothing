import React from 'react';
import './stripe-button.styles.scss';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const amount = price*100;
    const publishableKey = "pk_test_51KJJjrC6AS7jKFG3fDRv8If4DdhJcj3Zw4iVxEwa9ewO0IqKc1KY4p61Jww8Tr6QUlT4POFmlgFZVkNjkwREVCeC00HJM8RqDP";

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    }

    return (
        <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={amount}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
}

export default StripeCheckoutButton;