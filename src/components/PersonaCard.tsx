import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
export type PersonaCard = {
  name: string;
  label: string;
  to: string;
  img: string;
  alt: string;
  description: string;
};

export function PersonaCard({
  name,
  img,
  alt,
  to,
  label,
  description,
}: PersonaCard) {
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
      <div className="text-center text-black">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

      <div className="flex w-full flex-col items-center">
        <NavLink
          key={name}
          to={to}
          className="block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          {label}
        </NavLink>
      </div>
    </div>
  );
}

export default PersonaCard;
