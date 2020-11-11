// import styled components
import {
  HeaderContainer,
  LeftSide,
  RightSide,
  theme,
} from './styledComponents.js';
// import button
import { Button, Typography } from '@material-ui/core';
// import logo
import Logo from '../Logo/index.jsx';

// header component
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

// export default
export default Header;
