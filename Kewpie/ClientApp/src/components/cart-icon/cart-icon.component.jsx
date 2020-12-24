import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
  ShoppingCartIcon,
  CartContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const itemCount = useSelector(selectCartItemsCount);

  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingCartIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
