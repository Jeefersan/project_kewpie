import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../redux/cart/cart.selectors';
import {
  CheckoutSummaryContainer,
  TextContainer,
} from './checkout-summary.styles';
import CheckoutItem from '../checkout-item/checkout-item.component';

const CheckoutSummary = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <CheckoutSummaryContainer>
      <h2>Checkout Summary ({cartItemsCount} items)</h2>
      {cartItemsCount === 0 ? (
        <div>
          <TextContainer>You have no items in your cart.</TextContainer>
          <TextContainer>
            How about you try out our best-selling California Special Roll?
          </TextContainer>
        </div>
      ) : (
        cartItems.map((cartItem) => (
          <CheckoutItem checkoutItem={cartItem} key={cartItem.id} />
        ))
      )}
    </CheckoutSummaryContainer>
  );
};

export default CheckoutSummary;
