import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Hero as HeroType } from "../types/Hero";
export type HeroContainer = Pick<
  HeroType,
  "title" | "description" | "image" | "links"
>;

export function HeroContainer({
  title,
  description,
  image,
  links,
}: HeroContainer) {
  return (
    <section
      style={{ backgroundImage: `url(${image.url})` }}
      className={`relative  bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-1/2 lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-primary sm:text-5xl">
            {title}
          </h1>

          <div className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            {links.map(({ id, label, href }) => {
              return (
                <NavLink
                  key={id}
                  to={href}
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  {label}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroContainer;