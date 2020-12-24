import React from 'react';
import { CheckoutPageContainer } from './checkout.styles';

import CheckoutSummary from '../../components/checkout/checkout-summary/checkout-summary.component';
import OrderSummary from '../../components/order-summary/order-summary.component';

const CheckoutPage = () => {
  return (
    <CheckoutPageContainer>
      <CheckoutSummary />
      <OrderSummary />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
