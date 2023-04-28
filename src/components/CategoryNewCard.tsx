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
      className="flex flex-col space-y-4 space-y-4 rounded-3xl p-4 ring-1 ring-brand-500 xl:p-10"
    >
      <img alt={alt} src={img} className="mx-auto rounded" />
      <p className="text-brand-600 text-left text-xl font-bold sm:text-2xl">
        {name}
      </p>
      <p className="text-left text-sm leading-6 text-brand-500">
        {description}
      </p>
    </div>
  );
}

export default CategoryNewCard;
