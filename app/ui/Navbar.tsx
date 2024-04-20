import Link from "next/link";

// TODO hacer el navbar responsive y agregar el contador del carrito

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="mx-auto max-w-2xl p-4 lg:max-w-7xl lg:px-8 flex justify-between">
        <div className="flex flex-col text-5x1 p-1 justify-center">
          <div className="text-base font-bold">AmazonLibre</div>
        </div>

        <div className="flex gap-8 items-center justify-center">
          <Link
            href={"/"}
            className="hover:font-bold transition-font duration-200"
          >
            Products
          </Link>
          <Link
            href={"/cart"}
            className="hover:font-bold transition-font duration-200"
          >
            Cart
          </Link>
          <Link
            href={"/dashboard"}
            className="hover:font-bold transition-font duration-200"
          >
            My account
          </Link>
          <Link
            href={"/login"}
            className="hover:font-bold transition-font duration-200"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}
