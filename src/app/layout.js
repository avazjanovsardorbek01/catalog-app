import "./globals.css";

export const metadata = {
  title: "Каталог товаров",
  description: "Мини-каталог товаров на Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head />
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
// Compare this snippet from src/app/products/page.jsx:
