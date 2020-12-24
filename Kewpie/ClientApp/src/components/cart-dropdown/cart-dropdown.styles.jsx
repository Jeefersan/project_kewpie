import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CartContainer = styled.div`
  padding: 20px;
  width: 240px;
  display: flex;
  text-align: center;
  flex-direction: column;
  background: white;
  top: 100px;
  right: 40px;
  z-index: 5;
  position: absolute;
  border-radius: 8px;
  box-shadow: 2px 4px rgba(85, 85, 85, 0.4);
  border: 1px solid lightgray;
`;

export const CheckoutButton = styled(CustomButton)`
  align-self: center;
`;

export const ClearCartButton = styled(CustomButton)`
  margin: 0;
`;

export const CartFooter = styled.div`
  color: darkslategrey;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
