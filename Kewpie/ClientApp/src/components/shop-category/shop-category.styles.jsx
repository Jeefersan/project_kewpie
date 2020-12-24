import styled from 'styled-components';
import { mediaQueries } from '../../utils/media-queries';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  background-color: transparent;
  border-radius: 4px;
  padding: 10px;

  ${mediaQueries('md')`
  grid-template-columns: repeat(2, 1fr);
  padding: 16px;
  `}

  ${mediaQueries('xl')`
  grid-template-columns: repeat(3, 1fr);

  `}

${mediaQueries('xxl')`
  padding: 50px 80px;
  `}
`;

export const TitleContainer = styled.div`
  text-align: center;
  padding: 12px;
  h3 {
    margin: 0;
  }
`;

export const CategoryContainer = styled.div`
  background: whitesmoke;
  width: fit-content;
  padding: 20px;
  margin-bottom: 3px;
  hr {
    width: 40%;
  }

  ${mediaQueries('sm')`
  padding: 0 20px;
  margin-bottom: 8px;
  `}

  ${mediaQueries('md')`
  padding: 10px 28px;
  margin-bottom: 12px;
  `}

${mediaQueries('lg')`
  padding: 20px 60px;
  margin-bottom: 20px;
  `}
`;
