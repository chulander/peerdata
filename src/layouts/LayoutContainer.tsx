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
          <div className="mx-auto lg:mx-auto lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-8 lg:gap-y-4">
            <div className="col-span-7 row-span-2">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-brand-700 sm:text-center sm:text-4xl lg:col-span-2 lg:text-left xl:col-auto">
                {title}
              </h1>
              <div className="xs:w-full xs:space-y-8 mt-6 flex flex-col text-left lg:mt-0 lg:text-left xl:col-end-1 xl:row-start-1">
                {children}
              </div>
            </div>
            <img
              id={image.id}
              src={image.url}
              alt={image.alt}
              className="col-span-5 mt-10 aspect-auto w-full rounded-2xl object-cover sm:mt-12 lg:mt-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutContainer;
