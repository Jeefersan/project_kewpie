import styled from 'styled-components';
import { mediaQueries } from '../../../utils/media-queries';

export const HamburgerContainer = styled.div`
  width: 36px;
  height: 36px;
  padding: 8px;
  display: block;
  &:hover {
    cursor: pointer;
  }
  ${mediaQueries('md')`
  display: none;
    `}
`;
