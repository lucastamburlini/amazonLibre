import Link from "next/link";

// TODO hacer un footer acorde a la pagina con info util

export default function Footer() {
  return (
    <footer className="mx-auto max-w-2xl p-4 lg:max-w-7xl lg:px-8 flex justify-end gap-3">
      <Link
        href={""}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition-colors duration-200"
      >
        Link
      </Link>
      <Link
        href={""}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition-colors duration-200"
      >
        Link
      </Link>
    </footer>
  );
}
