import Banner from '../../components/Banner';
import About from '../About';
import Contact from '../Contact';
import Carousel from '../../components/Carousel';
import Searvices from '../Searvices';
import Shop from '../Shop';

export default function Homer() {
  return (
    <>
      <Banner />
      <Searvices />
      <About />
      <Shop />
      <Carousel />
      <Contact />
    </>
  );
}
