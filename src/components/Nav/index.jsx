import NavLinks from '../NavLinks';

export default function Nav() {
  return (
    <>
      <NavLinks to="/">Home</NavLinks>
      <NavLinks to="/about">About</NavLinks>
      <NavLinks to="/services">Services</NavLinks>
      <NavLinks to="/shop">Shop</NavLinks>
      <NavLinks to="/contact">Contact</NavLinks>
    </>
  );
}
