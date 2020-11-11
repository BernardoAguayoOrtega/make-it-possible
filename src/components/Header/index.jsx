// import styled components
import { HeaderContainer, LeftSide, RightSide } from './styledComponents.js';
// import button
import { Button, Typography } from '@material-ui/core';
// import logo
import Logo from '../Logo/index.jsx';

// header component
const Header = () => (
  <HeaderContainer>
    <LeftSide>
      <Logo />
      <Typography variant="caption">Blog</Typography>
    </LeftSide>
    <RightSide>
      <Button style={{ color: 'white' }}>Sign Up</Button>
      <Button style={{ color: 'white' }}>Sign In</Button>
    </RightSide>
  </HeaderContainer>
);

// export default
export default Header;
