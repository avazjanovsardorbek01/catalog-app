import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return (
    <main className="main">
      <h1>Добро пожаловать в Каталог Товаров 📱</h1>
      <Link href="/products">
        <button>Перейти к товарам</button>
      </Link>
    </main>
  );
}
