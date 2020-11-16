/**
 * Footer component, shows general info to user like about, privacy policy, etc
 */
import Logo from '../../components/Logo/index.jsx';

const Footer = () => (
  <footer className="footer">
    <Logo aria-label="logo" aria-required="true" className="footer__logo" />
    <div className="footer__subtitle">
      <a className="about-link" href="/about">
        <h2>About</h2>
      </a>
      <a className="policy-link" href="/Privacy_Policy">
        <h2>Privacy Policy</h2>
      </a>
      <a className="team-link" href="/team">
        <h2>Team</h2>
      </a>
    </div>
    <p aria-label="rights" aria-required="true" className="footer__comments">
      2020 by Bernado Aguayo and Alvaro Masias
    </p>
  </footer>
);

export default Footer;
