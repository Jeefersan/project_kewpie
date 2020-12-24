import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: 95%;
  margin: 10px 4px;

  img {
    float: left;
    margin-right: 8px;
    width: 40px;
    height: 40px;
  }

  div {
    float: right;
  }

  .item-name {
    display: block;
    font-size: 16px;
    color: darkslategray;
    text-align: center;
  }

  .item-price {
    color: darkred;
    margin-right: 6px;
  }

  .item-quantity {
    color: darkgrey;
    align-self: flex-end;
  }
`;
