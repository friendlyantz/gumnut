"use client";

import Product from "./Product";
import { ProductsService } from "./productsService";

export default function Products() {
  const productsService = new ProductsService();
  const products = productsService.getProducts();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl mb-2 neon-text russian-title">КИБЕРТОРГ</h1>
        <h2 className="text-2xl mb-4 tracking-wider">CYBER MARKETPLACE</h2>
        <p className="text-gray-400 font-mono">
          Добро пожаловать в будущее • Welcome to the future
        </p>
      </div>

      <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center border-t border-gray-700 pt-6 mt-6">
        <p className="text-cyan-400 font-mono text-lg mb-1">
          ⚡ СИСТЕМА БЕЗОПАСНОСТИ АКТИВНА ⚡
        </p>
        <p className="text-gray-700 text-sm">
          Security system active • Все транзакции зашифрованы
        </p>
      </div>
    </div>
  );
}
