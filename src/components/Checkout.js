import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleToken = (token) => {
    // Handle token from Stripe and complete the payment process
    console.log(token);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total: ${totalAmount}</p>
      <StripeCheckout
        stripeKey="your-publishable-stripe-key"
        token={handleToken}
        amount={totalAmount * 100}
        name="E-Commerce Platform"
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default Checkout;
