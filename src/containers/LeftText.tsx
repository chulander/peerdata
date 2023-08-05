import { classNames } from "../utils";

export interface LeftText {
  className?: string;
  category: string;
  title?: string;
  children?: React.ReactNode;
  mainContent: string;
  subContent: string;
}
export function LeftText({
  className,
  children,
  category,
  title,
  mainContent,
  subContent,
}: LeftText) {
  return (
    <section
      className={classNames(
        "flex w-full items-center justify-between gap-x-10",
        !className ? "" : className
      )}
    >
      <article className="flex w-full flex-col xl:basis-[47%]">
        <header>
          <h4 className="body-x-small lg:body-small uppercase text-brand-green">
            {category}
          </h4>
        </header>
        {[title, mainContent, subContent].map((item) =>
          !item ? null : (
            <p
              key={item}
              className="mt-5 text-[1.3rem] leading-[1.8rem] lg:leading-7 tracking-tight text-current lg:text-[1.6rem]"
            >
              {item}
            </p>
          )
        )}
        {/* {!title ? null : (
          // <p className="mt-5 mb-4 text-[3.4rem] font-normal leading-[3.75rem] tracking-tight">
          //   {title}
          // </p>
          <p className="mt-4 text-lg  leading-[1.85rem] tracking-tight text-current">
            {title}
          </p>
        )}
        <p className="mt-4 text-[1.4rem]  leading-[1.85rem] tracking-tight text-current">
          {mainContent}
        </p>

        <p className="mt-8 text-[1.4rem] leading-[1.85rem] tracking-tight text-current">
          {subContent}
        </p> */}
        {children}
      </article>
    </section>
  );
}
