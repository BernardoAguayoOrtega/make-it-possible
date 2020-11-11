// import render method
import { render } from 'react-dom';
// import babel polyfill <3
import '@babel/polyfill';
// import app component
import App from './components/App/index.jsx';
// import global styles import
import GlobalStyle from './global style/globalStyles';

// create root const
const root = document.getElementById('root');

// render the app
render(
  <>
    <App />
    <GlobalStyle />
  </>,
  root
);
