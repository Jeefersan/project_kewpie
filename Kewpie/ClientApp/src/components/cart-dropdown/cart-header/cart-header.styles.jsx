import styled from 'styled-components';

export const CartHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CartTotalContainer = styled.div`
  text-align: end;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;

  .total-text {
    font-size: 14px;
    letter-spacing: 1px;
    color: darkslategrey;
  }
  .total-cost {
    color: darkslateblue;
  }
`;
