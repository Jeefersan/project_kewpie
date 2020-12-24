import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
} from '../../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  CheckoutItemInfoContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  PriceContainer,
  QtyTextContainer,
  TotalTextContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const { name, id, price, quantity } = checkoutItem;

  const imgUrl = (id) => `/images/shop-items/${id}.png`;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt='' src={imgUrl(id)} />
      </ImageContainer>
      <CheckoutItemInfoContainer>
        <TextContainer>{name}</TextContainer>
        <QtyTextContainer>Quantity</QtyTextContainer>
        <QuantityContainer>
          <div onClick={() => dispatch(removeItemFromCart(checkoutItem))}>
            &#10094;
          </div>
          <span>{quantity}</span>
          <div onClick={() => dispatch(addItemToCart(checkoutItem))}>
            &#10095;
          </div>
        </QuantityContainer>
      </CheckoutItemInfoContainer>
      <PriceContainer>
        <div>€{price}/pc</div>
        <TotalTextContainer>
          TOTAL:{' '}
          <span style={{ color: 'darkslategray' }}>€{price * quantity}</span>
        </TotalTextContainer>
      </PriceContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
