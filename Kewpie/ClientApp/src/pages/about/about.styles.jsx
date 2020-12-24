import styled from 'styled-components';

export const AboutPageContainer = styled.div`
  color: darkslategrey;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  h2 {
    margin: auto;
  }

  h5 {
    margin: 16px auto 0 auto;
    text-align: center;
    font-style: italic;
    color: #595959;
  }

  h6 {
    margin: 8px auto;
    font-style: italic;
  }

  hr {
    width: 80%;
    height: 1px;
    border: 0;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
`;

export const EmptyContainer = styled.div`
  height: 24px;
  background-color: white;
`;
