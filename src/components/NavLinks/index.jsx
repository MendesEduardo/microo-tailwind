import { useLocation, Link } from 'react-router-dom';

export default function NavLinks({ children, to }) {
  const localizacao = useLocation();

  return (
    <Link 
      className={`${
        localizacao.pathname === to
          ? 'text-micro-lightRed font-bold'
          : 'text-white'
      } hover:text-micro-lightRed`}
      to={to}
      data-testid="nav-links"
    >
      {children}
    </Link>
  );
}
