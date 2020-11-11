// import render method
import { render } from 'react-dom';
// import babel polyfill <3
import '@babel/polyfill';

// import app component
import App from './components/App/index.jsx';

// create root const
const root = document.getElementById('root');

// render the app
render(<App />, root);
