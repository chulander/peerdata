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
      <article className="flex w-full flex-col gap-y-6 xl:basis-[47%]">
        <header>
          <h3 className="header-3 text-brand-green">{category}</h3>
        </header>
        {!title ? null : <p className="header-2 text-">{title}</p>}
        <p className="body-small text-current">{mainContent}</p>

        <p className="body-small text-current">{subContent}</p>
        {children}
      </article>
    </section>
  );
}
