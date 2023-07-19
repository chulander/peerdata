import { classNames } from "../utils";
import { StackedImages } from "./StackedImages";

import Image3 from "../assets/images/image-company-3.jpg";
export interface CompanyTransparency {
  className?: string;
  category: string;
  title?: string;
  mainContent: string;
}
export function CompanyTransparency({
  className,
  category,
  title,
  mainContent,
}: CompanyTransparency) {
  return (
    <section
      className={classNames(
        "flex w-full items-center",
        !className ? "" : className
      )}
    >
      <article className="flex w-full grow justify-end lg:pr-20 xl:basis-6/12 xl:h-1/2 xl:p-32">
        <img
          alt="home-1"
          className="bg-contain bg-no-repeat object-scale-down "
          src={Image3}
        ></img>
      </article>
      <article className="flex grow flex-col lg:pr-20 xl:basis-6/12">
        <header>
          <h3 className="text-[1.15rem] uppercase tracking-tighter text-brand-green">
            {category}
          </h3>
        </header>
        {!title ? null : (
          <p className="mb-4 mt-5 text-[3.4rem] font-normal leading-[3.75rem] tracking-tight">
            {title}
          </p>
        )}
        <p className="mt-4 text-[1.7rem]  leading-7 tracking-tighter text-current">
          {mainContent}
        </p>
      </article>
    </section>
  );
}
