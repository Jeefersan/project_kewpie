import styled from 'styled-components';
import { mediaQueries } from '../../../utils/media-queries';

export const CheckoutSummaryContainer = styled.div`
  text-align: center;
  width: 100%;
  min-width: 280px;
  max-width: 640px;
  display: flex;
  padding: 24px;
  flex-direction: column;

  ${mediaQueries('lg')`
    width: 60%;
  `}
`;

export const TextContainer = styled.p`
  margin: 24px;
  color: darkslategrey;
`;
