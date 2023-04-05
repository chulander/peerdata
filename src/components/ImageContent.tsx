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
      className={`overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 ${
        type === "dark" ? "dark:bg-gray-900" : ""
      }`}
    >
      {direction === "left" ? (
        <Content name={name} description={description} type={type} />
      ) : (
        <Image img={img} alt={alt} />
      )}
      {direction === "left" ? (
        <Image img={img} alt={alt} />
      ) : (
        <Content name={name} description={description} type={type} />
      )}
    </section>
  );
}

type Content = {
  name: string;
  description: string;
  type?: "dark" | "light";
};

function Content({ name, description, type }: Content) {
  return (
    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-xl text-center sm:text-left">
        <h2
          className={`text-2xl font-bold text-gray-900 md:text-3xl ${
            type === "dark" ? "dark:text-white " : ""
          }`}
        >
          {name}
        </h2>

        <p
          className={`hidden text-gray-500 md:mt-4 md:block ${
            type === "dark" ? "dark:text-gray-300" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

type Image = {
  img: string;
  alt: string;
};
function Image({ img, alt }: Image) {
  return (
    <img alt={alt} src={img} className="h-56 w-full object-cover sm:h-full" />
  );
}

export default ImageContent;
