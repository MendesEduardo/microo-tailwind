import CallBackMocks from '../../mocks/CallBack';
import Button from '../../components/Button';

export default function Contact() {
  const { title, description, buttonContent } = CallBackMocks;

  return (
    <article className="bg-micro-grayDark">
      <div className="micro-container text-white">
        <h2 className="micro-title">{title}</h2>
        <p className="text-xl py-4">{description}</p>
        <form onSubmit="" className="mt-8">
          <input type="text" className="micro-input" placeholder="You Name" />
          <div className="flex flex-col md:flex-row gap-5 my-5">
            <input type="email" className="micro-input" placeholder="E-mail" />
            <input
              type="tel"
              className="micro-input"
              placeholder="Phone Number"
            />
          </div>
          <input
            type="text"
            className="micro-input h-28 rounded-sm"
            placeholder="Message"
          />
          <div className="flex justify-center mt-14">
            <Button type="submit" classButton="hover:border-none rounded-none">
              {buttonContent}
            </Button>
          </div>
        </form>
      </div>
    </article>
  );
}
