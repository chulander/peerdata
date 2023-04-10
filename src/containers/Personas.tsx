import Card from "../components/Card";
import usePersonas from "../hooks/usePersonas";
type Persona = {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: {
    id: string;
    url: string;
  };
};

export default function Personas() {
  const personas: Array<Persona> | null = usePersonas();
  console.log("personas", personas);
  console.log(personas);

  //   description = `
  //   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
  //   perferendis hic asperiores quibusdam quidem voluptates doloremque
  //   reiciendis nostrum harum. Repudiandae?
  // `,
  return !Array.isArray(personas) ? null : (
    <section>
      <div className="w-full  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:gap-x-16">
          <div className="mx-auto max-w-full text-center lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">Personas</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {personas.map(({ name, description, id, slug, image }: Persona) => (
              <Card
                key={id}
                name={name}
                description={description}
                alt={name}
                to={`/${slug}`}
                img={image.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
