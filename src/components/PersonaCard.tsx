import ReactMarkdown from "react-markdown";
import { ButtonLink } from "./ButtonLink";
import { Link } from "../types/Link";
export interface PersonaCard
  extends Pick<Link, "id" | "label" | "href" | "theme"> {
  name: string;
  img: string;
  alt: string;
  description: string;
}

export function PersonaCard({
  name,
  img,
  alt,
  href,
  id,
  label,
  theme,
  description,
}: PersonaCard) {
  return (
    <div className="flex flex-col space-y-4">
      <img
        alt={alt}
        src={img}
        className="inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <p className="text-center text-xl font-bold text-black sm:text-2xl">
        {name}
      </p>
      <div className="text-center text-black">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>

      <div className="flex flex-col items-center">
        <ButtonLink
          key={name}
          id={id}
          href={href}
          theme={theme}
          label={label}
        />
      </div>
    </div>
  );
}

export default PersonaCard;
