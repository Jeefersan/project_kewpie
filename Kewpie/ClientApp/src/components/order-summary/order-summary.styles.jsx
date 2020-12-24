import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  width: 280px;
  margin: 0 24px;
  padding: 24px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 3px 4px lightgray;
`;

export const RowContainer = styled.div`
  display: block;
  line-height: 24px;
  color: darkslategray;
`;

export const ValueContainer = styled.span`
  float: right;
  color: darkslateblue;
`;

export const Divider = styled.div`
  background-color: lightgray;
  height: 1px;
  width: 90%;
  align-self: center;
  margin: 16px 0;
`;

export const TotalRowContainer = styled.div`
  display: block;
  line-height: 28px;
  margin: 4px 0;
  text-transform: uppercase;
`;

export const OrderButton = styled(CustomButton)`
  margin-top: 12px;
  width: 100%;
  text-transform: uppercase;
  background-color: green;
  &:hover {
    background-color: greenyellow;
  }
`;
