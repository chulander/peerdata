import { ImageContainer } from "../types/Image";
export function ImageContainer({ id, title, image }: ImageContainer) {
  return (
    <section
      id={id}
      style={{ backgroundImage: `url(${image.url})` }}
      className="relative h-1/2 w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl justify-center px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <h1 className="text-3xl font-extrabold sm:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
