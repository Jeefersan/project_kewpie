import React from 'react';
import Divider from '../divider/divider.component';
import {
  CategoryContainer,
  GridContainer,
  TitleContainer,
} from './shop-category.styles';
import ShopItem from '../shop-item/shop-item.component';

const ShopCategory = ({ category }) => (
  <CategoryContainer>
    <TitleContainer>
      <h3>{category.title}</h3>
    </TitleContainer>
    <Divider />

    <GridContainer>
      {category.items.map((item) => (
        <ShopItem shopItem={item} key={item.id} />
      ))}
    </GridContainer>
  </CategoryContainer>
);

export default ShopCategory;
