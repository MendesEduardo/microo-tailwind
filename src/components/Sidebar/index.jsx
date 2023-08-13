import { useState } from 'react';
import Menu from '../../assets/images/menu_btn.png';
import ButtonLogin from '../ButtonLogin';
import Nav from '../Nav';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="text-xl" data-testid="sidebar">
      <button
        onClick={toggleSidebar}
        className="z-10 w-20 top-6 left-6 p-2 hover:text-lg hover:invert hover:w-[5.1rem] transition-all"
      >
        <img src={Menu} className="grayscale-0" alt="menu navigation" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-10 top-0 left-0 h-full w-64 bg-micro-roxo p-4 text-white transition-transform duration-500 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-7 right-7 text-white h-6 cursor-pointer text-4xl hover:text-micro-lightRed"
        >
          ×
        </button>
        <nav className="micro-nav">
          <ButtonLogin styles="sm:hidden flex" />
          <Nav />
        </nav>
      </div>
    </div>
  );
}
