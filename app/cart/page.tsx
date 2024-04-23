"use client";

import { useCart } from "../context/cartContext";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import ButtonOne from "../ui/ButtonOne";
import { useUser } from "../context/userContext";
import Link from "next/link";

export default function Cart() {
  const { user } = useUser();
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const calculateTotalCartPrice = () => {
    const totalPrice = cart.reduce(
      (total, product) =>
        total + (product.quantity ? product.price * product.quantity : 0),
      0
    );
    return totalPrice;
  };

  const handleClearCart = () => {
    Swal.fire({
      icon: "info",
      title: "Are you sure?",
      text: "This action will clear your cart",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Cleared!",
          text: "Your cart has been cleared.",
          icon: "success",
          timer: 1000,
        }).then(() => {
          router.push("/");
        });
      }
    });
  };

  const handleBuyCart = () => {
    Swal.fire({
      icon: "info",
      title: "Are you sure?",
      text: "This action will process your purchase",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, process purchase",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Purchase successful",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          clearCart();
          router.push("/");
        });
      }
    });
  };

  return (
    <section>
      {!user ? (
        <div className="min-h-[600px] flex items-center justify-center gap-1 text-lg">
          <p>You must</p>
          <Link href={"/login"} className="hover:underline text-yellow-500">
            log in
          </Link>
          <p>to view the cart</p>
        </div>
      ) : (
        <div className="bg-gray-100">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
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
                      <p className="text-gray-600">
                        Quantity: {product.quantity}
                      </p>{" "}
                      <p className="text-gray-600">
                        Price per unit: ${product.price}
                      </p>
                    </div>
                  </li>
                ))}
                <li className="flex items-center gap-5 mt-10 mb-10">
                  <h2 className="text-xl font-semibold">Total to pay: </h2>
                  <p className="text-gray-600 text-xl font-bold">
                    ${calculateTotalCartPrice()}
                  </p>
                </li>
                <div className="flex gap-5">
                  <ButtonOne text={"Clear"} onClick={handleClearCart} />
                  <ButtonOne text={"Buy"} onClick={handleBuyCart} />
                </div>
              </ul>
            ) : (
              <p className="min-h-80">No products in the cart.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
