/**
 * This is the app component => the root component, the core of the app
 */
import { hot } from 'react-hot-loader/root';
import Home from '../../pages/Home/index.jsx';
import Layout from '../Layout/index.jsx';
import '../../utils/firebase/firebase';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default hot(App);
