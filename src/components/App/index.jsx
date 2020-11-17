/**
 * This is the app component => the root component, the core of the app
 */
import { hot } from 'react-hot-loader/root';
import Home from '../../pages/Home/index.jsx';

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default hot(App);
