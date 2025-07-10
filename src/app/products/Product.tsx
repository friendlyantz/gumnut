"use client";

import { useContext, useState } from "react";
import { CartDispatchContext } from "../CartContext";
import type { Product } from "./productsService";

interface ProductProps {
  product: Product;
}

const categoryIcons = {
  cybernetics: "🦾",
  hardware: "💻",
  weapons: "⚔️",
  display: "📺",
  data: "💾",
};

export default function Product({ product }: ProductProps) {
  const {
    id,
    title,
    titleRu,
    imgSrc,
    description,
    descriptionRu,
    price,
    category,
  } = product;
  const dispatch = useContext(CartDispatchContext);
  const [imageError, setImageError] = useState(false);

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("adding to cart");
    const button = event.currentTarget;
    button.disabled = true;

    dispatch?.({
      type: "added",
      productId: id,
      name: title,
      price,
    });

    setTimeout(() => {
      button.disabled = false;
    }, 300);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-[2em] border-2 border-gray-400 dark:border-gray-600 hover:border-blue-500 transition-all duration-300 flex flex-col h-full">
      <div className="max-h-[200px] flex items-center justify-center overflow-hidden">
        {!imageError ? (
          <img
            src={imgSrc}
            alt={title}
            className="max-h-[200px] w-auto object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-[85px] opacity-60">
            {categoryIcons[category as keyof typeof categoryIcons]}
          </div>
        )}
      </div>
      <div className="px-6 py-4 flex flex-col flex-grow">
        <div className="font-bold text-xl mb-2 font-mono text-right">
          {category.toUpperCase()}
          <span className="ml-[0.5em]">
            {categoryIcons[category as keyof typeof categoryIcons]}
          </span>
        </div>
        <h3 className="neon-text russian-title">{titleRu}</h3>
        <p className="font-mono">{title}</p>
        <p className="russian-description">{descriptionRu}</p>
        <p>{description}</p>

        <div className="flex justify-end items-center space-x-4 mt-auto pt-4">
          <div className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text">
            ${price}
          </div>
          <button
            onClick={addToCart}
            className="relative group overflow-hidden bg-gradient-to-br from-gray-800 to-black px-4 py-2 rounded-lg border border-pink-500/30 hover:border-pink-400 shadow-md shadow-pink-500/10 hover:shadow-pink-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="relative z-10 font-bold text-xs tracking-wider text-white group-hover:text-pink-300 transition-colors">
              КУПИТЬ
              <span className="block text-[10px] text-gray-400 group-hover:text-gray-300">
                BUY
              </span>
            </div>

            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated border bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
