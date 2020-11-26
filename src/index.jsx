/**
 * app entry point
 */
import { render } from 'react-dom';
import '@babel/polyfill';
import App from './components/App/index.jsx';
import GlobalStyle from './global style/globalStyles';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './utils/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

const store = configureStore();

const persistor = persistStore(store);

render(
  <Router basename="/">
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <App />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </Router>,
  root
);
