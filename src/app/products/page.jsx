"use client";

import { useState } from "react";
import Link from "next/link";
import "./products.css";

const mockProducts = [
  { id: 1, name: "iPhone 13", price: 799, image: "/iphone13.jpg" },
  { id: 2, name: "Samsung Galaxy S22", price: 749, image: "/s22.jpg" },
  { id: 3, name: "Google Pixel 6", price: 599, image: "/pixel6.jpg" },
];

export default function ProductsPage() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Каталог товаров</h1>

      <div className="product-grid">
        {mockProducts.slice(0, visibleCount).map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="product-card cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price} $</p>
            </div>
          </Link>
        ))}
      </div>

      {visibleCount < mockProducts.length && (
        <button onClick={handleLoadMore} className="load-button">
          Показать больше
        </button>
      )}

      <Link href="/">
        <button className="back-button">⬅ Назад на главную</button>
      </Link>
    </div>
  );
}
