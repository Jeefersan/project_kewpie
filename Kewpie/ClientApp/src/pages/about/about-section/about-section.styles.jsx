import styled from 'styled-components';
import { mediaQueries } from '../../../utils/media-queries';

export const AboutSectionContainer = styled.div`
  color: darkslategrey;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;

  ${mediaQueries('md')`
    padding: 12px;
  `}
  ${mediaQueries('sm')`
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
