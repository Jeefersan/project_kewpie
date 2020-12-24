import React from 'react';
import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import {
  ItemContainer,
  ItemInfoContainer,
  ItemImage,
  ItemPrice,
  ItemName,
  ItemDescription,
  ItemImageContainer,
  AddButton,
} from './shop-item.styles';

const ShopItem = ({ shopItem }) => {
  const { id, name, price, description } = shopItem;
  const imgUrl = (id) => `/images/shop-items/${id}.png`;

  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <ItemImageContainer>
        <ItemImage className='bg-image' src={imgUrl(id)} />
      </ItemImageContainer>
      <ItemInfoContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>{`€${price}`}</ItemPrice>
        <ItemDescription>{description}</ItemDescription>
      </ItemInfoContainer>
      <AddButton onClick={() => dispatch(addItemToCart(shopItem))}>
        Add to cart
      </AddButton>
    </ItemContainer>
  );
};

export default ShopItem;
