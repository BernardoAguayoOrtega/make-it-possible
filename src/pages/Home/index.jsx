/**
 * This is home component, show home pages to new users
 */
import Carousel from '../../components/Carousel/index.jsx';
import Header from '../../components/Header/index.jsx';
import Features from '../../components/Features/index.jsx';
import Footer from '../../components/Footer/index.jsx';

const Home = () => (
  <>
    <Header />
    <Carousel />
    <Features />
    <Footer />
  </>
);

export default Home;
