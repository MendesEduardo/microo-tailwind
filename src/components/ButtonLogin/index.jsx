import { FaUser } from 'react-icons/fa';

export default function ButtonLogin({ styles }) {
  return (
    <button
      className={`${styles} gap-2 items-center text-white mb-8 sm:m-0 hover:text-lg hover:text-micro-grayDark transition-all `}
      data-testid="button-login"
    >
      <FaUser size={25} data-testid="user-icon" className="hidden sm:flex" />
      <p>Login</p>
    </button>
  );
}
