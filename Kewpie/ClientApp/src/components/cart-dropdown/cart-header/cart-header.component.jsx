import React from 'react';

import { CartHeaderContainer, CartTotalContainer } from './cart-header.styles';

const CartHeader = ({ totalPrice }) => {
  return (
    <CartHeaderContainer>
      <CartTotalContainer>
        <span className='total-text'>Total: </span>
        <span className='total-cost'>{`€${totalPrice}`}</span>
      </CartTotalContainer>
    </CartHeaderContainer>
  );
};

export default CartHeader;
