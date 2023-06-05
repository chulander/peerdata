import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
export type CategoryNewCard = {
  id: string;
  name: string;
  img: string;
  alt: string;
  description: string;
};

export function CategoryNewCard({
  id,
  name,
  img,
  alt,
  description,
}: CategoryNewCard) {
  return (
    <div
      id={id}
      className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04) flex flex-col space-y-4 rounded-3xl p-4 ring-1 ring-brand-blue xl:p-10
      "
    >
      <img alt={alt} src={img} className="mx-auto rounded" />
      <p className="text-left text-xl font-bold text-brand-700 sm:text-2xl">
        {name}
      </p>
      <p className="text-left text-sm leading-6 text-black font-light">
        {description}
      </p>
    </div>
  );
}

export default CategoryNewCard;
