"use client";

import { useEffect, useState } from "react";
import { Product } from "../lib/definitions";
import Image from "next/image";
import Button from "../ui/ButtonOne";
import Link from "next/link";
import { useCart } from "../context/cartContext";
import Loading from "../loading";

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const { addToCart } = useCart();

  const [productDetail, setProductDetail] = useState<Product>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetailData() {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const productDetail = await response.json();
      setProductDetail(productDetail);
      setLoading(false);
    }
    fetchDetailData();
  }, []);

  if (isLoading) return <Loading />;
  if (!productDetail)
    return (
      <p className="min-w-full h-80 py-72 flex justify-center items-center">
        No profile data
      </p>
    );

  const handleAddToCart = () => {
    if (productDetail) {
      const quantityInput = document.getElementById(
        "quantityInput"
      ) as HTMLInputElement;
      if (quantityInput) {
        const quantity = parseInt(quantityInput.value, 10);
        const productWithQuantity = {
          ...productDetail,
          quantity: quantity,
        };
        addToCart(productWithQuantity);
      }
    }
  };

  return (
    <section>
      {productDetail && (
        <article className="min-h-96 mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:max-w-7xl lg:px-8 justify-center flex">
          <div className="flex items-center w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl justify-center">
            <div className="relative bg-gray-100 flex w-full items-center overflow-hidden px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="h-80 aspect-h-3 aspect-w-2 overflow-hidden sm:col-span-4 lg:col-span-5 bg-white items-center justify-center flex">
                  <Image
                    src={productDetail.image}
                    alt={productDetail.title}
                    className="max-w-full max-h-full group-hover:opacity-75 p-2"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                    {productDetail.title}
                  </h2>

                  <section className="mt-2 flex flex-col gap-3">
                    <p className="text-xs">{productDetail.description}</p>

                    <p className="text-2xl text-gray-900">
                      ${productDetail.price}
                    </p>

                    <div className="mt-1">
                      <div className="flex items-center">
                        <h4 className="font-bold">Reviews</h4>
                        <p className="ml-3 text-xs font-medium text-orange-500">
                          ({productDetail.rating.count})
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="">
                          {productDetail.rating.rate} out of 5 stars
                        </p>
                      </div>
                      <div className="flex items-center">
                        Quantity:
                        <input
                          id="quantityInput"
                          type="number"
                          className=" ms-1 w-16 px-2 py-1"
                          defaultValue={1}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button text={"Add to cart"} onClick={handleAddToCart} />
                      <Link
                        href="/cart"
                        className="bg-blue-500 hover:bg-blue-700 
                      text-white px-5 py-2.5 border 
                      border-blue-700 rounded-full text-sm font-medium transition-all duration-200 ease-in-out"
                        title="Ir al carrito"
                      >
                        Go to cart
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}
