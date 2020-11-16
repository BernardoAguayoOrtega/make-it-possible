// footer component
const Footer = () => (
  <footer className="footer">
    <Logo aria-label="logo" aria-required="true" className="footer__logo" />
    <div className="footer__subtitle">
      <Link className="about-link" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="policy-link" to="/Privacy_Policy">
        <h2>Privacy Policy</h2>
      </Link>
      <Link className="team-link" to="/team">
        <h2>Team</h2>
      </Link>
    </div>
    <p aria-label="rights" aria-required="true" className="footer__comments">
      2020 by Masters INC. Proudly created with React JS
    </p>
  </footer>
);
// export default
export default Footer;
