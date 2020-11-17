// import globalStyles
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  body::-webkit-scrollbar {
  width: 1px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: white;        /* color of the tracking area */
}

body{
  padding: 0 !important;
}
`;

export default GlobalStyle;
