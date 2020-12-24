import styled from 'styled-components';

export const HorizontalRuler = styled.hr`
  width: 80%;
  height: 1px;
  border: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;
