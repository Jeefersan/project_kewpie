import styled from 'styled-components';
import { mediaQueries } from '../../../utils/media-queries';

export const ChefsSectionContainer = styled.div`
  color: darkslategrey;
  padding: 36px 28px;

  display: flex;
  flex-direction: column;
  background-color: whitesmoke;

  h2 {
    margin-bottom: 20px;
  }

  ${mediaQueries('sm')`
    padding: 12px;
  `}
  ${mediaQueries('md')`
      padding: 14px;
    `}  
  ${mediaQueries('lg')`
      padding: 16px;
    `}  
  ${mediaQueries('xl')`
      padding: 20px;
    `}  
  ${mediaQueries('xxl')`
      padding: 28px;
    `}
`;

export const ChefsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 10px;
  text-align: center;
  justify-items: center;
  img {
    margin: 4px auto;
  }

  ${mediaQueries('md')`
      padding: 8px;
      img{
        float: left;
      }
    `}
  ${mediaQueries('lg')`
      padding: 16px;
      grid-template-columns: repeat(2, 1fr);
      img{
        float: unset;
      }
    `}  
  ${mediaQueries('xl')`
      padding: 16px;
      grid-template-columns: repeat(3, 1fr);
    `}  
  ${mediaQueries('xxl')`
      padding: 28px;
    `}
`;
