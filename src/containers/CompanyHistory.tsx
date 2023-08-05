import { classNames } from "../utils";

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
        "flex h-full w-full items-center justify-between overflow-hidden lg:pb-40",
        !className ? "" : className
      )}
    >
      <article className="hidden w-full flex-col lg:flex lg:pr-20 xl:basis-6/12">
        <header>
          <h4 className="body-small uppercase text-brand-green">{category}</h4>
        </header>
        {!title ? null : (
          <p className="mb-4 mt-5 text-[3.4rem] font-normal leading-[3.75rem] tracking-tight">
            {title}
          </p>
        )}
        <p className="mt-4 text-[1.6rem] leading-7 tracking-tight text-current">
          {mainContent}
        </p>
      </article>
      <article className="relative hidden lg:block xl:basis-6/12">
        <div className="relative h-full w-full">
          <img
            alt="home-1"
            className="bg-contain bg-no-repeat object-scale-down lg:w-3/5 xl:w-1/2"
            src={Image1}
          ></img>
          <img
            alt="home-2"
            className="absolute z-10 lg:right-0 lg:top-1/4 lg:w-3/5 xl:right-20 xl:top-1/2 xl:w-1/2"
            src={Image2}
          ></img>
        </div>
      </article>
      {/* mobile view */}
      <section className="mt-10 flex h-full w-full flex-col lg:hidden">
        <article className="flex w-full flex-col lg:pr-20 xl:basis-6/12">
          <header>
            <h4 className="body-x-small uppercase text-brand-green">
              {category}
            </h4>
          </header>
        </article>
        <article className="flex w-full flex-col lg:hidden lg:pr-20 xl:basis-6/12">
          {!title ? null : (
            <p className="mb-4 mt-5 text-[3.4rem] font-normal leading-[3.75rem] tracking-tight">
              {title}
            </p>
          )}
          <p className="mt-5 text-[1.3rem] leading-[1.8rem] tracking-tight text-current lg:text-[1.6rem] lg:leading-7">
            {mainContent}
          </p>
        </article>

        <article className="mt-10 w-full lg:hidden">
          <img
            alt="home-1"
            className="max-h-screen w-full bg-cover bg-no-repeat"
            src={Image1}
          ></img>
        </article>
      </section>
    </section>
  );
}
