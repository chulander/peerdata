import CategoryCard from "../components/CategoryCard";
import Subtitle from "../components/Subtitle";

import { Category } from "../types/Category";
import { Container } from "../types/Container";

export function CategoriesContainer({
  title,
  blocks,
}: Pick<Container<Category>, "title" | "blocks">) {
  return !title || !blocks.length === null ? null : (
    <section>
      <div className="w-full  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:gap-x-16">
          <div className="mx-auto max-w-full text-center lg:mx-0">
            <Subtitle text={title} />
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-4">
            {blocks.map(
              ({ title: name, description, id, image, link }: Category) => (
                <CategoryCard
                  key={id}
                  name={name}
                  description={description}
                  alt={name}
                  to={link.href}
                  label={link.label}
                  img={image.url}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesContainer;
