import { classNames } from "../utils";
import { StackedImages } from "./StackedImages";

import Image1 from "../assets/images/image-company-1.jpg";
import Image2 from "../assets/images/image-company-2.jpg";
export interface CompanyHistory {
  className?: string;
  category: string;
  title?: string;
  mainContent: string;
}
export function CompanyHistory({
  className,
  category,
  title,
  mainContent,
}: CompanyHistory) {
  return (
    <section
      className={classNames(
        "flex h-full w-full items-center justify-between overflow-hidden pb-40",
        !className ? "" : className
      )}
    >
      <article className="flex w-full flex-col lg:pr-20 xl:basis-6/12">
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
      <article className="relative xl:basis-6/12">
        <div className="relative h-full w-full">
          <img
            alt="home-1"
            className="bg-contain bg-no-repeat object-scale-down lg:w-3/5 xl:w-1/2"
            src={Image1}
          ></img>
          <img
            alt="home-2"
            className="absolute z-10 lg:right-0 lg:top-1/4 lg:w-3/5 xl:right-20 xl:top-1/3 xl:w-1/2"
            src={Image2}
          ></img>
        </div>
      </article>
    </section>
  );
}
