import { NavLink } from "react-router-dom";
export type Card = {
  name: string;
  to: string;
  img: string;
  alt: string;
  description: string;
};

export default function Card({
  name,
  img,
  alt,
  to,
  description = "testing",
}: Card) {
  return (
    <div className="flex flex-col space-y-4">
      <img
        alt={alt}
        src={img}
        className="inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <p className="text-center text-xl font-bold text-black sm:text-2xl">
        {name}
      </p>
      <p className="text-center text-sm text-black">{description}</p>
      <button>Click me</button>
    </div>
  );
}
