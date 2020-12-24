import styled from 'styled-components';
import { mediaQueries } from '../../../../utils/media-queries';

export const ChefContainer = styled.div`
  text-align: center;
  margin: 10px auto;

  h3 {
    margin: 4px auto;
    ${mediaQueries('lg')`
      margin: 12px auto;
    `}
  }

  img {
    max-width: 75%;
    display: block;
  }

  ${mediaQueries('lg')`
  margin: 24px auto;
    `}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 6px;
    display: block;
    font-size: 14px;
    font-style: italic;
    color: darkred;
  }

  ul {
    margin: 0;
  }

  ${mediaQueries('lg')`
      span{
        text-align: center;
      }
    `}
`;
