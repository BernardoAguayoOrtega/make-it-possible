/**
 * Footer component, shows general info to user like about, privacy policy, etc
 */
import Logo from '../../components/Logo/index.jsx';
import {
  FooterContainer,
  FooterInfo,
  Copyright,
  LogoContainer,
} from './styledComponents';

const Footer = () => (
  <FooterContainer>
    <LogoContainer>
      <Logo aria-label="logo" aria-required="true" />
    </LogoContainer>
    <FooterInfo>
      <a href="/about">
        <h2>About</h2>
      </a>
      <a href="/Privacy_Policy">
        <h2>Privacy Policy</h2>
      </a>
      <a href="/team">
        <h2>Team</h2>
      </a>
    </FooterInfo>
    <Copyright aria-label="rights" aria-required="true">
      <p>2020 by Bernado Aguayo and Alvaro Masias</p>
    </Copyright>
  </FooterContainer>
);

export default Footer;
