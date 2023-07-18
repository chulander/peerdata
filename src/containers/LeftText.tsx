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
          <h3 className="text-[1.15rem] uppercase tracking-tighter text-brand-green">
            {category}
          </h3>
        </header>
        {!title ? null : (
          <p className="mt-5 mb-4 text-[3.4rem] font-normal leading-[3.75rem] tracking-tight">
            {title}
          </p>
        )}
        <p className="mt-4 text-[1.4rem]  leading-[1.85rem] tracking-tight text-current">
          {mainContent}
        </p>

        <p className="mt-8 text-[1.4rem] leading-[1.85rem] tracking-tight text-current">
          {subContent}
        </p>
        {children}
      </article>
    </section>
  );
}
