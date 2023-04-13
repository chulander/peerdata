import PersonaCard from "../components/PersonaCard";
import useQuery from "../hooks/useQuery";

import { Persona } from "../types/Persona";
import { Container as ContainerType } from "../types/Container";
import { personasContainerQuery } from "../pages/Home/queries/personasContainerQuery";

export function PersonasContainer() {
  const personasContainer = useQuery<ContainerType<Persona>>(
    personasContainerQuery,
    "container"
  );

  return personasContainer === null ? null : (
    <section>
      <div className="w-full  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:gap-x-16">
          <div className="mx-auto max-w-full text-center lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {personasContainer["title"]}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            {personasContainer["blocks"].map(
              ({ name, description, id, image, link }: Persona) => (
                <PersonaCard
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

export default PersonasContainer;
