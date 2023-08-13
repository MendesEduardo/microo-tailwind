import banner from '/images/banner2.jpg';
import BannerMocks from '../../mocks/Banner';
import Button from '../../components/Button';

export default function Banner() {
  const { title, description, buttonContent, image } = BannerMocks;

  return (
    <section
      className="h-full w-full bg-cover bg-center -mt-36 py-12"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="micro-container pb-0 mt-10 sm:mt-0 flex flex-col md:flex-row items-center justify-around gap-10 sm:gap-0 text-white">
        <div className="flex flex-col items-start gap-5 max-w-2xl">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold pb-5">
            {title}
          </h1>
          <p className="text-xl mb-5">{description}</p>
          <Button>{buttonContent}</Button>
        </div>
        <div>
          <img
            src={image}
            className="md:max-w-sm lg:max-w-xl"
            alt="Banner microphone"
          />
        </div>
      </div>
    </section>
  );
}
