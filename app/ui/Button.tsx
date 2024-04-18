import { ButtonProps } from '../lib/definitions';


export default function Button ({onClick, text}:ButtonProps) {
    return (
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900" onClick={onClick}>
            {text}
        </button>
    )
}