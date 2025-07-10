"use client";

import { v4 as uuidv4 } from "uuid";
import { createContext, useReducer, ReactNode } from "react";

export const CartContext = createContext<CartItem[]>([]);
export const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);

interface CartItem {
  cartId: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  cost: number;
}

interface CartAction {
  type: 'added' | 'incremented' | 'decremented' | 'deleted' | 'cartReset';
  cartId?: string;
  productId?: string;
  name?: string;
  price?: number;
}

class CartService {
  private storageKey = 'shopping-cart';

  items(): CartItem[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  updateCart(cart: CartItem[]): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}

const cartService = new CartService();

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, cartService.items());

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function cartReducer(cart: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "added": {
      const newCart = cart.some(
        (cartProduct) => cartProduct.productId === action.productId
      )
        ? cart.map((cartProduct) => {
            if (cartProduct.productId === action.productId) {
              return {
                ...cartProduct,
                quantity: cartProduct.quantity + 1,
                cost: cartProduct.cost + cartProduct.price,
              };
            }
            return cartProduct;
          })
        : [
            ...cart,
            {
              cartId: uuidv4(),
              productId: action.productId!,
              name: action.name!,
              price: action.price!,
              quantity: 1,
              cost: action.price!,
            },
          ];
      cartService.updateCart(newCart);
      return newCart;
    }
    case "incremented": {
      const newCart = cart.map((item) => {
        if (item.cartId === action.cartId) {
          return {
            ...item,
            quantity: item.quantity + 1,
            cost: item.cost + item.price,
          };
        }
        return item;
      });
      cartService.updateCart(newCart);
      return newCart;
    }
    case "decremented": {
      const newCart = cart
        .map((item) => {
          if (item.cartId === action.cartId) {
            if (item.quantity <= 1) {
              return null;
            }
            return {
              ...item,
              quantity: item.quantity - 1,
              cost: item.cost - item.price,
            };
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
      cartService.updateCart(newCart);
      return newCart;
    }
    case "deleted": {
      const newCart = cart.filter(
        (item: CartItem) => item.cartId !== action.cartId
      );
      cartService.updateCart(newCart);
      return newCart;
    }
    case "cartReset": {
      cartService.updateCart([]);
      return [];
    }
    default: {
      throw Error("Unknown action: " + (action as CartAction).type);
    }
  }
}
