import footer from '/images/footer.jpg';
import logo from '/images/logo.png';
import Button from '../Button';
import Nav from '../Nav';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const titleContact = 'text-3xl font-bold pt-5 pb-3';
  const hoverSocial = 'hover:text-red-600 cursor-pointer';
  const widthMax = 'md:w-1/3';

  return (
    <footer
      className="h-full w-full bg-cover "
      style={{
        backgroundImage: `url(${footer})`,
      }}
    >
      <div className="micro-container text-white md:flex md:flex-wrap md:justify-around items-end">
        <div className={widthMax}>
          <img src={logo} alt="Logo Microo" />
          <h3 className={`${titleContact}`}>Adderess</h3>
          <ul>
            <li>Jobify Inc Canada. 545 Younge St,</li>
            <li>Suite 11 Toronto, Ontario M4K 6F4</li>
          </ul>
          <ul className="flex gap-x-4 gap-y-2 flex-wrap mt-10  uppercase">
            <Nav />
          </ul>
        </div>
        <div className={`pt-5 ${widthMax}`}>
          <h3 className={`${titleContact}`}>Contact Us</h3>
          <ul>
            <li>(+71) 897648934</li>
            <li>demo123@gmail.com</li>
          </ul>
          <ul className="flex gap-5 my-5 md:mb-0">
            <li className={hoverSocial}>
              <FaFacebookF size={30} />
            </li>
            <li className={hoverSocial}>
              <FaTwitter size={30} />
            </li>
            <li className={hoverSocial}>
              <FaInstagram size={30} />
            </li>
          </ul>
        </div>
        <div className={widthMax}>
          <h3 className={`${titleContact}`}>Newsletter</h3>
          <input
            type="email"
            className="micro-input mb-4"
            placeholder="Enter your email"
          />
          <Button classButton="uppercase rounded-none bg-red-600 hover:border-none hover:bg-red-900">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="bg-black text-white text-center p-4">
        <p>© 2020 All Rights Reserved. Design by Free Html Template</p>
      </div>
    </footer>
  );
}
