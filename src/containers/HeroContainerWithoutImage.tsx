import ReactMarkdown from "react-markdown";
import { Hero } from "../types/Hero";
import { ButtonLink } from "../components/ButtonLink";

export type HeroContainerWithoutImage = Pick<
  Hero,
  "title" | "description" | "links"
>;
export function HeroContainerWithoutImage({
  title,
  description,
  links,
}: HeroContainerWithoutImage) {
  return (
    <section className="overflow-hidden bg-gray-200 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="relative mx-auto max-w-screen-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h2>

          <div className="text-gray-500 md:mt-4 md:block">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            {links.map(({ id, label, href, theme }) => {
              return (
                <ButtonLink
                  key={id}
                  id={id}
                  label={label}
                  href={href}
                  theme={theme}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContainerWithoutImage;
