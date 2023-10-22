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
        "mt-10 w-full lg:mt-0 lg:flex lg:items-center",
        !className ? "" : className
      )}
    >
      <article className="hidden w-full grow justify-end lg:flex lg:pr-20 xl:h-1/2 xl:basis-6/12">
        <img
          alt="home-1"
          className="max-h-screen bg-contain bg-no-repeat object-scale-down"
          src={Image3}
        ></img>
      </article>
      <article className="flex grow flex-col lg:pr-20 xl:basis-6/12">
        <header>
          <h2 className="peerdata-header uppercase">{category}</h2>
        </header>
        {!title ? null : (
          <p className="mb-4 mt-5 text-[3.4rem] font-normal leading-[3.75rem] tracking-tight">
            {title}
          </p>
        )}
        <p className="mt-5 text-[1.3rem] leading-[1.8rem] tracking-tight text-current lg:text-[1.6rem] lg:leading-7">
          {mainContent}
        </p>
      </article>
      <article className="mt-10 w-full justify-end lg:hidden">
        <img
          alt="home-1"
          className="max-h-screen w-full bg-cover bg-no-repeat"
          src={Image3}
        ></img>
      </article>
    </section>
  );
}
