import { ButtonProps } from "../lib/definitions";

export default function ButtonOne({ onClick, text }: ButtonProps) {
  return (
    <button
      className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all duration-200 ease-in-out"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
