/**
 * Layout component to avoid rewrite code from different app pages
 */
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
