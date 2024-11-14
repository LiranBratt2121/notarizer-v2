import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: 'black';
    overflow-x: hidden;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
     overflow-x: hidden;
  }

  // Add any other global styles here
`;

export default GlobalStyle;