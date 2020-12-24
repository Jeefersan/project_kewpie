import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import {
  CartContainer,
  CheckoutButton,
  CartFooter,
} from './cart-dropdown.styles';

import CartHeader from './cart-header/cart-header.component';
import CartItem from './cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <CartContainer>
      <CartHeader totalPrice={cartTotal} />
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <CartFooter>
        {cartItems.length === 0 ? (
          'Your cart is empty.'
        ) : (
          <CheckoutButton
            onClick={() => {
              history.push('/checkout');
              dispatch(toggleCartHidden());
            }}
          >
            checkout
          </CheckoutButton>
        )}
      </CartFooter>
    </CartContainer>
  );
};

export default CartDropdown;
