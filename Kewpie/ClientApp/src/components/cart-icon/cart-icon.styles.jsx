import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';

import { ReactComponent as ShoppingCart } from '../../assets/logo/shopping-cart.svg';

export const ShoppingCartIcon = styled(ShoppingCart)`
  width: 40px;
  height: 40px;
`;

export const CartContainer = styled.div`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  display: flex;

  ${mediaQueries('md')} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  top: 13px;
  color: darkgrey;
`;
