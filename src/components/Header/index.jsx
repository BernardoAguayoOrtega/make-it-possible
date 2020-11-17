/**
 * Header component, show user login/sign, logo and enter to blog
 */
import { HeaderContainer, LeftSide, RightSide } from './styledComponents.js';
import { Button, Typography } from '@material-ui/core';
import Logo from '../Logo/index.jsx';

const Header = () => (
  <HeaderContainer>
    <LeftSide>
      <Logo />
      <Typography style={{ color: 'whitesmoke' }} variant="caption">
        Blog
      </Typography>
    </LeftSide>
    <RightSide>
      <Button size="large" style={{ color: 'white' }}>
        Sign Up
      </Button>
      <Button size="large" style={{ color: 'white' }}>
        Sign In
      </Button>
    </RightSide>
  </HeaderContainer>
);

export default Header;
