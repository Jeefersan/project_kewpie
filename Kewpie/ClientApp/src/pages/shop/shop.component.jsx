import React from 'react';

import { ShopPageContainer } from './shop.styles';
import ShopCategory from '../../components/shop-category/shop-category.component';
import { SHOP_DATA as categories } from '../../redux/shop/shop.data';

const ShopPage = () => {
  return (
    <ShopPageContainer>
      {categories.map((category) => (
        <ShopCategory category={category} key={category.id} />
      ))}
    </ShopPageContainer>
  );
};

export default ShopPage;
