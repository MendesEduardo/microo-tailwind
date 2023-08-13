import Sidebar from '../Sidebar';
import logo from '/images/logo.png';
import NavLinks from '../NavLinks';
import ButtonLogin from '../ButtonLogin';

export default function Header() {
  return (
    <header className="flex justify-between items-center gap-4 p-3 sm:p-6">
      <NavLinks to="/">
        <img src={logo} alt="Logo Microo" />
      </NavLinks>
      <div className="flex gap-10 ">
        <ButtonLogin styles="hidden sm:flex" />
        <Sidebar />
      </div>
    </header>
  );
}
