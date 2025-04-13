"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css"; // Подключаем глобальные стили

// Mock данные для карусели и товаров
const heroSlides = [
  {
    id: 1,
    title: "Новая коллекция смартфонов",
    subtitle: "Лучшие модели 2025 года",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", // Смартфон
    cta: "Купить сейчас",
  },
  {
    id: 2,
    title: "Скидки до 30%",
    subtitle: "Только этой неделей",
    image:
      "https://img.freepik.com/free-photo/front-view-young-female-holding-writing-sale-nameplate-red_140725-154100.jpg?semt=ais_hybrid&w=740", // Скидки
    cta: "Посмотреть скидки",
  },
  {
    id: 3,
    title: "Бесплатная доставка",
    subtitle: "При заказе от 500$",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514", // Доставка
    cta: "Условия доставки",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1603898037225-dc6f1f91bb16", // iPhone
    badge: "New",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 849,
    image: "https://images.unsplash.com/photo-1580910051076-78057c961cb0", // Samsung
    badge: "Popular",
  },
  {
    id: 3,
    name: "MacBook Pro M2",
    price: 1999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // MacBook
    badge: "Top",
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    price: 249,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1b2a5da", // AirPods
    badge: "Sale",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Автопереключение карусели
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Анимация при загрузке
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? heroSlides.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className={`home-container ${isVisible ? "visible" : ""}`}>
      {/* Hero Carousel */}
      <section className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""} ${
              isAnimating ? "animating" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1 className="hero-title animate-fadeIn">{slide.title}</h1>
              <p className="hero-subtitle animate-fadeIn">{slide.subtitle}</p>
              <button className="hero-cta animate-bounce">{slide.cta}</button>
            </div>
          </div>
        ))}
        <button className="carousel-control prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          ❯
        </button>
        <div className="carousel-dots">
          {heroSlides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section animate-slideUp">
        <h2 className="section-title">
          <span>Популярные товары</span>
        </h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && (
                <span
                  className={`product-badge ${product.badge.toLowerCase()}`}
                >
                  {product.badge}
                </span>
              )}
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-overlay">
                  <button className="quick-view">Быстрый просмотр</button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-price">${product.price}</div>
                <button className="add-to-cart">В корзину</button>
              </div>
            </div>
          ))}
        </div>
        <Link href="/products">
          <button className="view-all-btn">Смотреть все товары →</button>
        </Link>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content animate-fadeIn">
          <h2>Специальное предложение</h2>
          <p>Получите скидку 20% на первый заказ</p>
          <div className="countdown">
            <div className="countdown-item">
              <span id="days">05</span>
              <span>Дней</span>
            </div>
            <div className="countdown-item">
              <span id="hours">12</span>
              <span>Часов</span>
            </div>
            <div className="countdown-item">
              <span id="minutes">45</span>
              <span>Минут</span>
            </div>
          </div>
          <button className="discount-btn">Получить скидку</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2 className="section-title">
          <span>Категории</span>
        </h2>
        <div className="categories-grid">
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              alt="Смартфоны"
            />
            <div className="category-overlay">
              <h3>Смартфоны</h3>
              <Link href="/products?category=phones">Просмотреть</Link>
            </div>
          </div>
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="Ноутбуки"
            />
            <div className="category-overlay">
              <h3>Ноутбуки</h3>
              <Link href="/products?category=laptops">Просмотреть</Link>
            </div>
          </div>
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1b2a5da"
              alt="Аксессуары"
            />
            <div className="category-overlay">
              <h3>Аксессуары</h3>
              <Link href="/products?category=accessories">Просмотреть</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2>Подпишитесь на рассылку</h2>
            <p>Получайте эксклюзивные предложения и новости первыми</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Ваш email" required />
              <button type="submit">Подписаться</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
