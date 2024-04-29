import { ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
}

export interface User {
  firstName: string;
  lastName: string;
  id: string;
  pictureUrl: string;
  password?: string;
  email: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

export interface UserContextType {
  users: User[];
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  createUser: (userData: User) => void;
}
