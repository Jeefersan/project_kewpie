import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  min-width: 120px;
  line-height: 2rem;
  text-transform: uppercase;
  cursor: pointer;
  ${(props) => (props.inverted ? invertedBtnStyles : defaultBtnStyles)}
`;

const defaultBtnStyles = css`
  color: darkgrey;
  background: whitesmoke;
  border: darkgrey 1px solid;

  &:hover {
    background-color: darkgrey;
    color: whitesmoke;
    border: 1px solid transparent;
  }
`;

const invertedBtnStyles = css`
  color: whitesmoke;
  background: darkgrey;
  border: 1px solid transparent;

  &:hover {
    background-color: whitesmoke;
    color: darkgrey;
    border: darkgrey 1px solid;
  }
`;
