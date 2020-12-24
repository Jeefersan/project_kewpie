import styled, { createGlobalStyle } from 'styled-components';
import { mediaQueries } from './utils/media-queries';

export const GlobalStyle = createGlobalStyle`
html, body {
  overflow-x:hidden;
}

body {
    position: relative;
    padding: 10px;
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;
  

${mediaQueries('md')`
padding: 10px 15px;
`}
${mediaQueries('lg')`
padding: 20px 30px;
`}
${mediaQueries('xl')`
  padding: 30px 40px;
`}
${mediaQueries('xxl')`
padding: 30px 40px;
`}

#root{
  margin: 0 auto;
}


  }
  
  h2 {
    color: darkslategrey;
  }
  
  h3 {
    color: darkslategrey;
  }

  h5 {
    margin: 16px auto 0 auto;
    text-align: center;
    font-style: italic;
    color: darkgrey;
  }

  h6 {
    margin: 8px auto;
    font-style: italic;
  }

  * {
      box-sizing: border-box;
  }
  
  a {
    text-decoration: none❯;
  }
  
`;

export const AppContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
