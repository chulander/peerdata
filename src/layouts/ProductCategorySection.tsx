import Subtitle from "../components/Subtitle";
import { ProductCategoryDetailCard } from "../components/ProductCategoryDetailCard";
import { CategoryCard } from "../types/CategoryCard";
export type ProductCategorySection = {
  title: string;
  className?: string;
  cards: CategoryCard[];
};

export function ProductCategorySection({
  title: name,
  className,
  cards,
}: ProductCategorySection) {
  return (
    <section
      className={`m-auto flex flex-col items-center space-y-12 ${className}`}
    >
      <Subtitle text={name} />
      <div className="m-auto grid w-full grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
        {cards.map(({ id, title, description, image, caption }) => (
          <ProductCategoryDetailCard
            className="bg-gray-100"
            key={id}
            title={title}
            description={description}
            image={image}
            caption={caption}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCategorySection;
