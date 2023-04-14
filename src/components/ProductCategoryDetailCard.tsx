import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { CategoryCard } from "../types/CategoryCard";

export interface ProductCategoryDetailCard
  extends Pick<CategoryCard, "title" | "image" | "caption" | "description"> {
  className?: string;
}

export function ProductCategoryDetailCard({
  title,
  image,
  caption,
  description,
  className = "",
}: ProductCategoryDetailCard) {
  return (
    <div
      className={`flex w-full flex-col items-center rounded-lg border border-gray-200 shadow md:max-w-xl md:flex-row ${className}`}
    >
      <div className="flex h-full w-1/2 flex-col p-4 leading-normal">
        <h6 className="text-gray-900">{caption}</h6>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
      <div className="block w-1/2 p-4">
        <img
          className="aspect-square h-full w-full object-cover"
          src={image?.url}
          alt={title}
        />
      </div>
    </div>
  );
}

export default ProductCategoryDetailCard;
