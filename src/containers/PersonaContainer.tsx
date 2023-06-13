import { Card } from "../components/Card";
import { StaticCard } from "../components/StaticCard";

export const tiers = [
  {
    name: "Data Owner",
    id: "data-owner",
    href: "/contact",
    description:
      "Turn your data into assets. We provide tools to guide you through your data monetization journey, to unlock maximum value and amplify reach.",
    cta: "Contact Us",
    image:
      "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
  },
  {
    name: "Data Consumer",
    id: "data-consumer",
    href: "/contact",
    description:
      "Reduce time to context, objective assessment of data quality and improve the data discovery process.",
    cta: "Contact Us",
    image:
      "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
  },
  {
    name: "Data Investor",
    id: "data-investor",
    href: "/contact",
    description: "Invest in the essential commodity powering the data economy.",
    cta: "Contact Us",
    image:
      "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao=",
  },
];

export function PersonaContainer() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-brand-blue sm:text-5xl">
            What is your Role in the Data Economy?
          </h2>
        </div>
        <div className="isolate mx-auto mt-10 grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map(({ id, href, name, description, cta, image }: Card) =>
            id === "data-investor" ? (
              <StaticCard
                key={id}
                href={href}
                id={id}
                name={name}
                image={image}
                cta={cta}
              >
                <p>
                  <span className="text-sm font-light leading-6 text-black">
                    {description}
                  </span>
                  <br />
                  <br />
                </p>
              </StaticCard>
            ) : id === "data-consumer" ? (
              <StaticCard
                key={id}
                href={href}
                id={id}
                name={name}
                image={image}
                cta={cta}
              >
                <p>
                  <span className="text-sm font-light leading-6 text-black">
                    Reduce time to context, objective assessment of data quality
                    and improve the data discovery process.
                    <br />
                  </span>
                </p>
              </StaticCard>
            ) : (
              <StaticCard
                key={id}
                href={href}
                id={id}
                name={name}
                image={image}
                cta={cta}
              >
                <p>
                  <span className="text-sm font-light leading-6 text-black">
                    Turn your data into assets. We provide tools to guide you
                    through your data monetization journey, to unlock maximum
                    value and amplify reach.
                  </span>
                </p>
              </StaticCard>
            )
          )}
        </div>
      </div>

      <div className="mx-8 mt-10 border-0 border-brand-blue px-6 pt-10 sm:mt-16 sm:pt-16 lg:block lg:border-t lg:px-8"></div>
    </div>
  );
}

export default PersonaContainer;
