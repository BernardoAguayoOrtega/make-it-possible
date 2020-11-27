/**
 * Header component, show user login/sign, logo and enter to blog
 */
import { useState } from 'react';
import {
  HeaderContainer,
  LeftSide,
  RightSide,
  ModalContainer,
} from './styledComponents.js';
import { Button, Typography } from '@material-ui/core';
import Logo from '../Logo/index.jsx';
import Modal from '../Modal/index.jsx';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../utils/redux/selectors';
import { userLogout } from '../../utils/redux/thunks';

const Header = ({ user, onPressUserLogout }) => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <HeaderContainer>
      <LeftSide>
        <Link to="/">
          <Logo />
        </Link>
        <Typography style={{ color: 'whitesmoke' }} variant="caption">
          Blog
        </Typography>
      </LeftSide>
      <RightSide>
        {user ? (
          <>
            {pathname !== `/dash/${user.uid}` && (
              <Button
                size="large"
                style={{ color: 'white' }}
                onClick={() => history.push(`/dash/${user.uid}`)}
              >
                Go to App
              </Button>
            )}
            <Button
              size="large"
              style={{ color: 'white' }}
              onClick={() => onPressUserLogout()}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setOpen(true);
                setOption(true);
              }}
              size="large"
              style={{ color: 'white' }}
            >
              Sign Up
            </Button>
            <Button
              onClick={() => {
                setOpen(true);
                setOption(false);
              }}
              size="large"
              style={{ color: 'white' }}
            >
              Sign In
            </Button>
          </>
        )}
      </RightSide>
      <ModalContainer>
        <Modal open={open} setOpen={setOpen} option={option} />
      </ModalContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPressUserLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
