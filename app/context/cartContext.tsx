"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { CartContextType, CartProviderProps, Product } from "../lib/definitions";
import Swal from "sweetalert2";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    Swal.fire({
      icon: "success",
      title: "Product added to cart",
      showConfirmButton: false,
      timer: 1000,
    });
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
