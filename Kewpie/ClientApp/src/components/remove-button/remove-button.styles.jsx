import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`;
