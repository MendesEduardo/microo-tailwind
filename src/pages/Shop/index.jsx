import ShopMocks from '../../mocks/ShopMics';
import CardMics from './CardMics';

export default function Shop() {
  const { title, description, products } = ShopMocks;
  return (
    <section className="bg-micro-grayDark">
      <div className="micro-container flex flex-wrap gap-10 justify-center items-center text-center text-micro-texto">
        <h2 className="micro-title">{title}</h2>
        <p className="micro-description pb-5">{description}</p>
        {products.map((product) => (
          <CardMics key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
