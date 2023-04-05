import Subtitle from "../components/Subtitle";
import { ProductCategoryDetailCard } from "../components/ProductCategoryDetailCard";
export type ProductCategorySection = {
  name: string;
  className?: string;
  categoryDetails: Array<ProductCategoryDetailCard>;
};

export function ProductCategorySection({
  name,
  className,
  categoryDetails,
}: ProductCategorySection) {
  return (
    <section
      className={`m-auto flex flex-col items-center space-y-4 px-4 py-8 text-center ${className}`}
    >
      <Subtitle text={name} />
      <div className="m-auto grid w-full grid-cols-1 items-center gap-x-8 gap-y-4 md:grid-cols-2 md:items-stretch">
        {categoryDetails.map(({ name, description, img, caption }) => (
          <ProductCategoryDetailCard
            key={name}
            name={name}
            description={description}
            img={img}
            caption={caption}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductCategorySection;
