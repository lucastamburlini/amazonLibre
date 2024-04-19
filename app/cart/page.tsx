"use client"
//TODO crear un checkout para el carrito de compras  
//TODO boton de comprar con un alert de confirmacion
//TODO boton limpiar el carrito y redirigir a root


import { useCart } from "../context/cartContext";
import Image from "next/image";
import { Product } from "../lib/definitions";
import Link from "next/link";

export default function Cart() {
  const { cart, clearCart } = useCart();

  // Función para calcular el precio total del carrito
  const calculateTotalCartPrice = () => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    return totalPrice;
  };

  // Función para manejar el clic en el botón de limpiar carrito
  const handleClearCart = () => {
    clearCart();
    alert("El carrito ha sido limpiado");
  };

  const handleBuyCart = () => {
    clearCart();
    alert("La compra se ha realizado");
  };

  return (
    <section>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>
          {cart.length > 0 ? (
            <ul>
              {cart.map((product, index) => (
                <li key={index} className="mb-4 flex items-center">
                  <div className="mr-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p className="text-gray-600">Cantidad: 1</p> {/* Cantidad predeterminada */}
                    <p className="text-gray-600">Precio por unidad: ${product.price}</p>
                  </div>
                </li>
              ))}
              <li className="mb-4">
                <h2 className="text-xl font-semibold">Total</h2>
                <p className="text-gray-600">Precio total del carrito: ${calculateTotalCartPrice()}</p>
              </li>
              <li>
              <Link className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                href={'/'} 
                onClick={handleClearCart}>
                Limpiar</Link>
                <Link className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-3" 
                href={'/'} 
                onClick={handleBuyCart}>
                Comprar</Link>
              </li>
            </ul>
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
        </div>
      </div>
    </section>
  );
}
