import Image from "next/image";
import Link from "next/link";
import { Product } from "./lib/definitions";

async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

export default async function Home() {
  const products: Product[] = await fetchData();

  return (
    <main>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex h-80 min-h-full flex-col aspect-h-1 aspect-w-1  overflow-hidden bg-white xl:aspect-h-8 xl:aspect-w-7"
              >
                <Link
                  href={`/${product.id}`}
                  className="group flex items-center justify-center h-60 object-cover object-center"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full group-hover:opacity-75 p-10"
                    width={200}
                    height={200}
                    priority={true}
                  />
                </Link>
                <div className="p-2">
                  <h3 className="text-xs text-gray-700">{product.title}</h3>
                  <p className="text-lg font-medium text-gray-900">
                    $ {product.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
