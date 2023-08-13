export default function Button({ children, classButton }) {
  const classFixe =
    'bg-black w-52 h-16 font-bold text-lg rounded-xl hover:bg-micro-roxo hover:border-2 transition-all duration-200 ease-in';
  return <button className={`${classButton} ${classFixe}`}>{children}</button>;
}
