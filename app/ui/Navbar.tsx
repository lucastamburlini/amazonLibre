import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-2xl p-4 lg:max-w-7xl lg:px-8 flex justify-between">
      <div className="flex flex-col text-5x1  rounded p-1 justify-center">
        <div className="text-xs font-bold">
        3rd Class - Next.js with TypeScript
        </div>
        <div className="text-xs text-orange-500">Hedy Software</div>
      </div>

      <div className="flex gap-8 items-center justify-center">
        <Link
          href={"/"}
          className="hover:text-orange-500 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4.5 21q-.625 0-1.062-.437T3 19.5v-1.9l4-3.55V21zM8 21v-4h8v4zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.437 1.063T19.5 21zM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525q.275 0 .538.088T13 3.9l2 1.775z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
