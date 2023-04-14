import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Banner } from "../types/Banner";

export interface BannerContainer
  extends Pick<Banner, "title" | "description" | "image"> {
  title: string;
  description: string;
  alt: string;
  type?: "dark" | "light";
  direction?: "left" | "right";
}
export function BannerContainer({
  alt,
  title,
  description = "left",
  image,
  direction,
  type = "light",
}: BannerContainer) {
  return (
    <section
      className={`grid gap-x-12 overflow-hidden px-8 sm:grid-cols-4 md:p-12 lg:px-16 ${
        type === "dark" ? "dark:bg-gray-900" : ""
      }`}
    >
      {direction === "left" ? (
        <Content
          className="sm:col-span-2"
          title={title}
          description={description}
          type={type}
        />
      ) : (
        <Image className="rounded sm:col-span-2" img={image.url} alt={alt} />
      )}
      {direction === "left" ? (
        <Image className="rounded sm:col-span-2" img={image.url} alt={alt} />
      ) : (
        <Content
          className="sm:col-span-2"
          title={title}
          description={description}
          type={type}
        />
      )}
    </section>
  );
}

interface Content extends Pick<BannerContainer, "title" | "description"> {
  className?: string;
  type: "dark" | "light";
}

function Content({ className, title, description, type }: Content) {
  return (
    <div
      className={`flex max-w-xl flex-col justify-center text-center sm:text-left ${className}`}
    >
      <h2
        className={`text-2xl font-bold text-gray-900 md:text-3xl ${
          type === "dark" ? "dark:text-white " : ""
        }`}
      >
        {title}
      </h2>

      <div
        className={` text-gray-500 md:mt-8 md:block ${
          type === "dark" ? "dark:text-gray-300" : ""
        }`}
      >
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  );
}

type Image = {
  className?: string;
  img: string;
  alt: string;
};
function Image({ className, img, alt }: Image) {
  return (
    <img
      alt={alt}
      src={img}
      className={`max-h-96 w-full object-cover ${className}`}
    />
  );
}

export default BannerContainer;
