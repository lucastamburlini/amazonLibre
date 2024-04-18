import Link from "next/link";

//TODO modificar el navbar acorde al proyecto

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-2xl p-4 lg:max-w-7xl lg:px-8 flex justify-between">
      <div className="flex flex-col text-5x1 p-1 justify-center">
        <div className="text-xs font-bold">AmazonLibre</div>
      </div>

      <div className="flex gap-8 items-center justify-center">
        <Link
          href={"/"}
          className="hover:text-orange-500 transition-colors duration-200"
        >
          Products
        </Link>
        <Link
          href={"/cart"}
          className="hover:text-orange-500 transition-colors duration-200"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}
