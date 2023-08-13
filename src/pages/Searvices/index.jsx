import SearvicesMocks from '../../mocks/OurServices';
import Card from './Card';

export default function Searvices() {
  const { title, description, products } = SearvicesMocks;
  return (
    <section className="bg-micro-grayDark">
      <div className="micro-container flex flex-wrap justify-around gap-2 text-center text-micro-texto">
        <h2 className="micro-title">{title}</h2>
        <p className="micro-description">{description}</p>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
