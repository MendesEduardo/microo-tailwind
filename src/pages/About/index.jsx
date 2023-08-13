import Button from '../../components/Button';
import AboutMocks from '../../mocks/AboutUs';

export default function About() {
  const { title, description, buttonContent, image } = AboutMocks;

  return (
    <section className="bg-gradient-to-l from-micro-red to-micro-roxo">
      <div className="micro-container text-white flex gap-10 items-center flex-col lg:flex-row">
        <div className="w-full">
          <h2 className="micro-title text-5xl">{title}</h2>
          <p className="text-xl mt-5 mb-8">{description}</p>
          <Button>{buttonContent}</Button>
        </div>
        <div className="w-full">
          <img src={image} className="rounded-3xl" alt={title} />
        </div>
      </div>
    </section>
  );
}
