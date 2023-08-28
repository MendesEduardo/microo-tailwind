import Banner from '../../components/Banner';
import About from '../About';
import Contact from '../Contact';
import Carousel from '../../components/Carousel';
import Services from '../Services';
import Shop from '../Shop';

export default function Homer() {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Shop />
      <Carousel />
      <Contact />
    </>
  );
}
