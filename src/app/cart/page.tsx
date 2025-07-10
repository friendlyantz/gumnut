"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext, CartDispatchContext } from "../CartContext";
import Link from "next/link";

interface CartItem {
  cartId: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  cost: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  useEffect(() => {
    setCartItems(cart.sort((a, b) => a.name.localeCompare(b.name)));
  }, [cart]);

  const deleteFromCart = (cartId: string) => {
    dispatch?.({
      type: "deleted",
      cartId: cartId,
    });
  };

  const incrementQuantity = (cartId: string) => {
    dispatch?.({
      type: "incremented",
      cartId: cartId,
    });
  };

  const decrementQuantity = (cartId: string) => {
    dispatch?.({
      type: "decremented",
      cartId: cartId,
    });
  };

  const cartTotal = (cart: CartItem[]) => {
    return cart.reduce((acc, { cost }) => acc + cost, 0);
  };

  const resetCart = () => {
    dispatch?.({
      type: "cartReset",
    });
  };

  const checkout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("🚀 Заказ отправлен в киберпространство! • Order sent to cyberspace!");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 bg-clip-text neon-text russian-title mb-4">
            КОРЗИНА
          </h1>
          <h2 className="text-xl text-gray-400 mb-6 tracking-wider">SHOPPING CART</h2>
          <Link
            href="/"
            className="neon-button text-white px-6 py-3 rounded-md font-bold tracking-wider hover:scale-105 transition-transform inline-block"
          >
            ← НАЗАД К ТОВАРАМ
            <span className="block text-xs">BACK TO PRODUCTS</span>
          </Link>
        </div>

        {cartItems.length > 0 ? (
          <div className="bg-gray-700 rounded-lg border border-gray-600 neon-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full md:table block">
                <thead className="bg-gray-800 border-b border-gray-600 md:table-header-group hidden">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-cyan-400 uppercase tracking-wider">
                      ТОВАР • ITEM
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-cyan-400 uppercase tracking-wider">
                      КОЛ-ВО • QTY
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-cyan-400 uppercase tracking-wider">
                      ЦЕНА • PRICE
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-cyan-400 uppercase tracking-wider">
                      ИТОГО • TOTAL
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-cyan-400 uppercase tracking-wider">
                      ДЕЙСТВИЯ • ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {cartItems.map(({ cartId, name, quantity, price, cost }) => (
                    <tr key={`cart-item-${cartId}`} className="hover:bg-gray-600/50 transition-colors md:table-row block mb-4 sm:mb-6 md:mb-0 border-b border-gray-600 md:border-b-0 pb-4 md:pb-0">
                      <td className="px-6 py-4 md:table-cell block">
                        <div className="text-sm font-medium text-white">{name}</div>
                      </td>
                      <td className="px-6 py-4 md:table-cell block">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => decrementQuantity(cartId)}
                            className="w-8 h-8 rounded-full bg-gray-600 border border-pink-400 flex items-center justify-center hover:bg-pink-400/20 hover:scale-110 transition-all text-pink-400 font-bold"
                          >
                            −
                          </button>
                          <span className="text-white font-mono w-8 text-center bg-gray-800 px-2 py-1 rounded border border-gray-500">
                            {quantity}
                          </span>
                          <button
                            onClick={() => incrementQuantity(cartId)}
                            className="w-8 h-8 rounded-full bg-gray-600 border border-cyan-400 flex items-center justify-center hover:bg-cyan-400/20 hover:scale-110 transition-all text-cyan-400 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 md:table-cell block">
                        <div className="text-gray-300 font-mono">
                          {price.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="text-xs text-gray-500">${price.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 md:table-cell block">
                        <div className="text-lg font-bold text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text">
                          {cost.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="text-xs text-gray-500">${cost.toFixed(2)}</div>
                      </td>
                      <td className="px-6 py-4 md:table-cell block">
                        <button
                          onClick={() => deleteFromCart(cartId)}
                          className="text-red-400 hover:text-red-300 transition-colors font-mono text-sm hover:scale-110 transform"
                        >
                          🗑️ УДАЛИТЬ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-800 border-t border-gray-600 md:table-footer-group block">
                  <tr className="md:table-row block">
                    <td colSpan={3} className="px-6 py-6 text-right text-xl font-bold text-white md:table-cell block text-center md:text-right">
                      ОБЩАЯ СУММА • TOTAL:
                    </td>
                    <td className="px-6 py-6 text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text neon-text md:table-cell block text-center md:text-left">
                      {cartTotal(cart).toLocaleString('ru-RU')} ₽
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-500 md:table-cell block text-center md:text-left">
                      ${cartTotal(cart).toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="px-6 py-6 bg-gray-800 border-t border-gray-600">
              <div className="flex flex-col space-y-6">
                <button
                  onClick={resetCart}
                  className="self-start bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold tracking-wider transition-all hover:scale-105 border border-red-500 hover:shadow-lg hover:shadow-red-500/30"
                >
                  🔥 ОЧИСТИТЬ КОРЗИНУ
                  <span className="block text-xs">CLEAR CART</span>
                </button>

                <form onSubmit={checkout} className="flex flex-col space-y-4 flex-1 w-full">
                  <textarea
                    placeholder="Особые инструкции для доставки в киберпространство... • Special delivery instructions to cyberspace..."
                    className="w-full px-5 py-4 bg-gray-700 border-2 border-cyan-400/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-300 font-mono text-sm shadow-lg shadow-cyan-400/10 min-h-[120px]"
                    rows={4}
                  />
                  <button
                    type="submit"
                    className="self-end bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3 rounded-md font-bold tracking-wider transition-all hover:scale-105 neon-text"
                  >
                    🚀 ЗАКАЗАТЬ
                    <span className="block text-xs">CHECKOUT</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="mb-8 text-8xl">🛒</div>
            <h2 className="text-2xl font-bold text-gray-400 mb-4 russian-title">КОРЗИНА ПУСТА</h2>
            <p className="text-gray-500 mb-8 font-mono">Cart is empty • Добавьте товары для начала</p>
            <Link
              href="/"
              className="neon-button text-white px-8 py-4 rounded-md font-bold tracking-wider hover:scale-105 transition-transform inline-block"
            >
              🛍️ НАЧАТЬ ПОКУПКИ
              <span className="block text-xs">START SHOPPING</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
