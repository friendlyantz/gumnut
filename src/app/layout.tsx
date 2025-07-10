import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./CartContext";
import Header from "./Header";

export const metadata: Metadata = {
  title: "КИБЕРТОРГ | Cyber Market",
  description: "Synthwave Russian cyber marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen grid-pattern">
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
