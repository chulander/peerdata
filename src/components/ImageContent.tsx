import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export type ImageContent = {
  name: string;
  img: string;
  description: string;
  alt: string;
  type?: "dark" | "light";
  direction?: "left" | "right";
};
export function ImageContent({
  alt,
  name,
  description = "left",
  img,
  direction,
  type = "light",
}: ImageContent) {
  return (
    <section
      className={`grid gap-x-12 overflow-hidden px-8 sm:grid-cols-4 md:p-12 lg:px-16 ${
        type === "dark" ? "dark:bg-gray-900" : ""
      }`}
    >
      {direction === "left" ? (
        <Content
          className="sm:col-span-2"
          name={name}
          description={description}
          type={type}
        />
      ) : (
        <Image className="rounded sm:col-span-2" img={img} alt={alt} />
      )}
      {direction === "left" ? (
        <Image className="rounded sm:col-span-2" img={img} alt={alt} />
      ) : (
        <Content
          className="sm:col-span-2"
          name={name}
          description={description}
          type={type}
        />
      )}
    </section>
  );
}

type Content = {
  name: string;
  description: string;
  className?: string;
  type?: "dark" | "light";
};

function Content({ className, name, description, type }: Content) {
  return (
    <div className={`flex flex-col justify-center max-w-xl text-center sm:text-left ${className}`}>
      <h2
        className={`text-2xl font-bold text-gray-900 md:text-3xl ${
          type === "dark" ? "dark:text-white " : ""
        }`}
      >
        {name}
      </h2>

      <p
        className={` text-gray-500 md:mt-4 md:block ${
          type === "dark" ? "dark:text-gray-300" : ""
        }`}
      >
        <ReactMarkdown>{description}</ReactMarkdown>
      </p>
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

export default ImageContent;
