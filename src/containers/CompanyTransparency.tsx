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
      <article className="flex w-full grow justify-end lg:pr-20 xl:h-1/2 xl:basis-6/12 xl:p-32">
        <img
          alt="home-1"
          className="bg-contain bg-no-repeat object-scale-down "
          src={Image3}
        ></img>
      </article>
      <article className="flex grow flex-col lg:pr-20 xl:basis-6/12">
        <header>
          <h4 className="body-small uppercase text-brand-green">{category}</h4>
        </header>
        {!title ? null : (
          <p className="mb-4 mt-5 text-[3.4rem] font-normal leading-[3.75rem] tracking-tight">
            {title}
          </p>
        )}
        <p className="mt-4 text-[1.6rem]  leading-7 tracking-tight text-current">
          {mainContent}
        </p>
      </article>
    </section>
  );
}
