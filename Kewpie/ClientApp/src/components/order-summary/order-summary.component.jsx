import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../redux/cart/cart.selectors';

import {
  OrderSummaryContainer,
  RowContainer,
  ValueContainer,
  TotalRowContainer,
  Divider,
  OrderButton,
} from './order-summary.styles';

const CheckoutSummary = () => {
  const cartTotal = useSelector(selectCartTotal);

  return (
    <OrderSummaryContainer>
      <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
      <RowContainer>
        <span>Shopping Cart Total</span>
        <ValueContainer>€{cartTotal}</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Coupon Discount</span>
        <ValueContainer>€20</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Chopsticks</span>
        <ValueContainer style={{ color: 'green' }}>FREE</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Wasabi & Soy sauce</span>
        <ValueContainer style={{ color: 'green' }}>FREE</ValueContainer>
      </RowContainer>
      <RowContainer>
        <span>Delivery</span>
        <ValueContainer>€5</ValueContainer>
      </RowContainer>
      <Divider />
      <TotalRowContainer>
        <span style={{ fontSize: '20px', letterSpacing: '1px' }}>
          Order Total
        </span>
        <ValueContainer>€113</ValueContainer>
      </TotalRowContainer>
      <OrderButton inverted>Place order</OrderButton>
    </OrderSummaryContainer>
  );
};

export default CheckoutSummary;
