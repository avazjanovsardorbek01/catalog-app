import Link from "next/link";
import "./show.css"; // подключаем глобальные стили

const mockProducts = [
  {
    id: 1,
    name: "iPhone 13",
    price: 799,
    image: "/iphone13.jpg",
    description: "Современный смартфон от Apple.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: 749,
    image: "/s22.jpg",
    description: "Флагман Samsung с крутым экраном.",
  },
  {
    id: 3,
    name: "Google Pixel 6",
    price: 599,
    image: "/pixel6.jpg",
    description: "Чистый Android и крутая камера.",
  },
];

export default function SingleProductPage({ params }) {
  const product = mockProducts.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div className="single-product-container">Товар не найден 😔</div>;
  }

  return (
    <div className="single-product-container">
      <img
        src={product.image}
        alt={product.name}
        className="single-product-image"
      />
      <h1 className="single-product-title">{product.name}</h1>
      <p className="single-product-price">{product.price} $</p>
      <p className="single-product-description">{product.description}</p>
      <Link href="/products">
        <button className="back-button">⬅ Назад к товарам</button>
      </Link>
    </div>
  );
}
