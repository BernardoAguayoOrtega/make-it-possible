import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../utils/redux/selectors';

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const id = props.match.params.id;

        if (!!user && user.uid === id) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(PrivateRoute);
