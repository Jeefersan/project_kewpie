import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CopyrightContainer = styled.div`
  text-align: center;
  font-size: small;
  margin-top: 24px;
  font-style: italic;
  color: grey;

  a {
    text-decoration: none;
  }
`;
