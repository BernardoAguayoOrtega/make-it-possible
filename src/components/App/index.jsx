/**
 * This is the app component => the root component <3
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
