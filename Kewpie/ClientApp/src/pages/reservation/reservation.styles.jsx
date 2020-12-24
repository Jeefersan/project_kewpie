import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';

export const ReservationPageContainer = styled.div`
  align-self: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  color: darkslategrey;
  h2 {
    align-self: center;
  }

  ${mediaQueries('md')`
    padding: 14px;
  `}

  ${mediaQueries('lg')`
    padding: 24px 40px;
  `}

  ${mediaQueries('xl')`
    padding: 40px 80px;
  `}
`;

export const RulesContainer = styled.div`
  margin: 24px auto;
  background-color: white;
  width: 90%;
  border-radius: 12px;
  padding: 8px;

  li {
    font-style: italic;
    line-height: 1.5rem;
  }

  span {
    font-size: smaller;
  }

  ${mediaQueries('lg')`
    width: 75%;
  `}
`;
