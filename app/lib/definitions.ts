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
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}
