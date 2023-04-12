import { NavLink } from "react-router-dom";

import { Banner as BannerType } from "../types/Banner";
import ReactMarkdown from "react-markdown";

export default function Banner({
  title,
  subtitle,
  image,
  buttons,
}: Pick<BannerType, "title" | "subtitle" | "image" | "buttons">) {
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

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            <ReactMarkdown>{subtitle}</ReactMarkdown>
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            {buttons.map(({ slug, label, href }) => (
              <NavLink
                key={slug}
                to={href}
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
