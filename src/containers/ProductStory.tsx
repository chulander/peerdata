import { Container } from "../types/Container";
import { Image } from "../types/Image";
export function ProductStory({
  id,
  title,
  image,
}: Pick<Container<Image>, "id" | "image" | "title">) {
  return !image ? null : (
    <section
      id={id}
      style={{ backgroundImage: `url(${image.url})` }}
      className={`relative bg-cover bg-center bg-no-repeat`}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-1/3 lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-extrabold text-white sm:text-5xl">{title}</h1>
        </div>
      </div>
    </section>
  );
}

export default ProductStory;
