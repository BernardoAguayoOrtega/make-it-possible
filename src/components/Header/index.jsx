/**
 * Header component, show user login/sign, logo and enter to blog
 */
import React from 'react';
import {
  HeaderContainer,
  LeftSide,
  RightSide,
  ModalContainer,
} from './styledComponents.js';
import { Button, Typography } from '@material-ui/core';
import Logo from '../Logo/index.jsx';
import Modal from '../Modal/index.jsx';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <LeftSide>
        <Logo />
        <Typography style={{ color: 'whitesmoke' }} variant="caption">
          Blog
        </Typography>
      </LeftSide>
      <RightSide>
        <Button
          onClick={() => setOpen(true)}
          size="large"
          style={{ color: 'white' }}
        >
          Sign Up
        </Button>
        <Button
          onClick={() => setOpen(true)}
          size="large"
          style={{ color: 'white' }}
        >
          Sign In
        </Button>
      </RightSide>
      <ModalContainer>
        <Modal open={open} setOpen={setOpen} />
      </ModalContainer>
    </HeaderContainer>
  );
};

export default Header;
