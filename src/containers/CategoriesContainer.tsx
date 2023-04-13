import CategoryCard from "../components/CategoryCard";
import useQuery from "../hooks/useQuery";

import { Persona } from "../types/Persona";
import { Container as ContainerType } from "../types/Container";
import { categoriesContainerQuery } from "../pages/Home/queries/categoriesContainerQuery";

export function CategoriesContainer() {
  const categoriesContainer = useQuery<ContainerType<Persona>>(
    categoriesContainerQuery,
    "container"
  );
  // const personas: Persona[] | null = usePersonas();

  return categoriesContainer === null ? null : (
    <section>
      <div className="w-full  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:gap-x-16">
          <div className="mx-auto max-w-full text-center lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {categoriesContainer["title"]}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-4">
            {categoriesContainer["blocks"].map(
              ({ name, description, id, image, link }: Persona) => (
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
