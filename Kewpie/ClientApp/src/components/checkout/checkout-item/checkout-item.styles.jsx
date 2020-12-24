import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;

  button {
    width: 20%;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const CheckoutItemInfoContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 20%;
  }
`;

export const ImageContainer = styled.div`
  width: 20%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  font-size: 16px;
  line-height: 1.5rem;
  width: 100%;
  text-align: center;
`;

export const QuantityContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkslategrey;
  div {
    cursor: pointer;
  }
`;

export const PriceContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-end;
  flex-direction: column;
  font-size: 14px;
`;

export const QtyTextContainer = styled.span`
  font-size: 12px;
  color: gray;
  margin-top: 8px;
`;

export const TotalTextContainer = styled.div`
  font-size: 14px;
  color: gray;
  margin-top: 12px;
  text-align: end;
`;
