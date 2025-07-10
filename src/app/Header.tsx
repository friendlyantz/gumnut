"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const cart = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    setTotalItems(cart.reduce((sum, item) => sum + item.quantity, 0));
  }, [cart]);

  return (
    <header className="bg-gray-900/90 border-b border-cyan-900/50 shadow-lg shadow-cyan-500/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl font-bold russian-title text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300 neon-text">
              КИБЕРТОРГ
            </span>
            <span className="text-xs tracking-widest font-mono text-gray-400">CYBER MARKET</span>
          </Link>

          <nav className="flex items-center">
            <Link
              href="/cart"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-cyan-800/40 hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-800/20 hover:shadow-cyan-500/30 group relative overflow-hidden"
            >
              <span className="relative z-10 font-mono text-sm tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                КОРЗИНА
                <span className="block text-xs text-gray-400 group-hover:text-gray-300">CART</span>
              </span>

              {/* Animated glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

              {isHydrated && totalItems > 0 && (
                <span className="relative z-10 inline-flex justify-center items-center w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-pink-500/30">
                  {totalItems}
                </span>
              )}

              {/* Animated border */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
