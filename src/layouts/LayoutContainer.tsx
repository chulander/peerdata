import { ReactNode } from "react";

export type Image = {
  id: string;
  alt: string;
  url: string;
};
export interface LayoutContainer {
  className?: string;
  title: string;
  children: ReactNode;
  image: Image;
}
export function LayoutContainer({
  className,
  title,
  children,
  image,
}: LayoutContainer) {
  return (
    <div className={`bg-white ${className}`}>
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-brand-700 sm:text-center sm:text-6xl lg:col-span-2 lg:text-left xl:col-auto">
              {title}
            </h1>
            <div className="xs:w-full xs:space-y-8 mt-6 flex flex-col text-left lg:mt-0 xl:max-w-2xl lg:text-left xl:col-end-1 xl:row-start-1">
              {children}
            </div>
            <img
              id={image.id}
              src={image.url}
              alt={image.alt}
              className="mt-10 aspect-[6/5] w-full rounded-2xl object-cover sm:mt-12 lg:mt-0 xl:max-w-2xl xl:row-span-2 xl:row-end-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutContainer;
