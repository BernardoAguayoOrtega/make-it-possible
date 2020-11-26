/**
 * This is the app component => the root component, the core of the app
 */
import { hot } from 'react-hot-loader/root';
import Home from '../../pages/Home/index.jsx';
import Layout from '../Layout/index.jsx';
import Chart from '../Chart/index.jsx';
import '../../utils/firebase/firebase';

const App = () => {
  return (
    <Layout>
      <Chart />
    </Layout>
  );
};

export default hot(App);
