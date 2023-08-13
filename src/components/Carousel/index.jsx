import { useState, useEffect } from 'react';
import test from '/images/test.png';
import aspas from '/images/icon.png';
import aspasRight from '/images/icon_right.png';
import CustomerOpinionMocks from '../../mocks/CustomerOpinion';

export default function Carousel() {
  const { title, description, messages } = CustomerOpinionMocks;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setAnimate(false); // Reinicia o estado de animação
      setTimeout(() => {
        setAnimate(true);
      }, 10);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToMessage = (index) => {
    setCurrentIndex(index);
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 10);
  };

  return (
    <section className="bg-gradient-to-r from-micro-red to-micro-roxo">
      <div className="micro-container relative flex flex-col items-center text-center text-white overflow-x-hidden">
        <h3 className="micro-title">{title}</h3>
        <p className="micro-description">{description}</p>
        <div
          className={`${
            animate ? 'fade-out-in' : ''
          } flex flex-col items-center`}
        >
          <img src={test} className="invert mb-[0.10rem]" alt="test" />
          <div className="max-w-screen-lg relative bg-micro-grayDark rounded-[4rem] py-16 px-10">
            <img src={aspas} alt="Aspas" />
            <p className="sm:text-lg py-5 -mt-2">
              {messages[currentIndex].details}
            </p>
            <img
              src={aspasRight}
              className="right-12 absolute"
              alt="Aspas Right"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
          {messages.map((_, index) => (
            <button
              key={index}
              className={`h-10 w-10 rounded-full bg-black ${
                currentIndex === index ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => goToMessage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
