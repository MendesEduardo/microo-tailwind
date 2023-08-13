import { HiSearch } from 'react-icons/hi';

export default function CardMics({ image, alt }) {
  return (
    <div className="w-72 h-auto sm:w-96 rounded-full p-1 relative bg-gradient-to-b from-micro-red to-micro-roxo">
      <figure>
        <img src={image} className="rounded-full w-full" alt={alt} />
      </figure>
      <div className="w-64 sm:w-[22rem] h-64 sm:h-[22rem] bg-black absolute top-4 left-4 rounded-full cursor-pointer opacity-0 hover:opacity-60 transition-all duration-300 ease-in">
        <HiSearch
          size={30}
          className="absolute top-[45%] left-[45%] text-micro-roxo"
        />
      </div>
    </div>
  );
}
