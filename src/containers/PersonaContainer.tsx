import { Card } from "../components/Card";

const tiers = [
  {
    name: "Data Owner",
    id: "data-owner",
    href: "/contact",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ligula convallis litora, ridiculus sed fringilla bibendum ornare pharetra blandit lacinia turpis",
    cta: "Connect with us",
    image:
      "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
  },
  {
    name: "Data Investor",
    id: "data-investor",
    href: "/contact",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ligula convallis litora, ridiculus sed fringilla bibendum ornare pharetra blandit lacinia turpis,",
    cta: "Connect with us",
    image:
      "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
  },
  {
    name: "Data Consumer",
    id: "data-consumer",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit ligula convallis litora, ridiculus sed fringilla bibendum ornare pharetra blandit lacinia turpis,",
    cta: "Connect with us",
    image:
      "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
  },
];

export function PersonaContainer() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-brand-blue sm:text-5xl">
            This is the title for Personas
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-brand-500">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map(
            ({ id, href, name, description, cta, featured, image }: Card) => (
              <Card
                key={id}
                href={href}
                id={id}
                name={name}
                description={description}
                image={image}
                cta={cta}
                featured={featured}
              />
            )
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-screen-2xl border-t border-brand-blue px-6 pt-10 sm:mt-16 sm:pt-16 lg:px-8"></div>
    </div>
  );
}

export default PersonaContainer;
