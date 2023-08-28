export default function Card({ name, details, image }) {
  return (
    <div className="pt-5 flex items-center flex-col gap-5">
      <div className="h-72 w-72 flex items-center justify-center rounded-full text-center bg-gradient-to-br from-micro-red to-micro-roxo">
        <img src={image} className="invert" alt={name} />
      </div>
      <h3 className="font-bold text-white text-2xl">{name}</h3>
      <p className="text-base max-w-sm">{details}</p>
    </div>
  );
}
