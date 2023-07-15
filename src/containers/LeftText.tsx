import { classNames } from "../utils";

export interface LeftText {
  className?: string;
  title: string;
  subtitle?:string;
  mainContent: string;
  subContent: string;
}
export function LeftText({
  className,
  title,
  subtitle,
  mainContent,
  subContent,
}: LeftText) {
  return (
    <section
      className={classNames(
        "flex w-full max-w-full items-center justify-between gap-x-10",
        !className ? "" : className
      )}
    >
      <article className="flex flex-col gap-y-6 lg:basis-2/5">
        <header>
          <h3 className="text-brand-green header-3">
            {title}
          </h3>
        </header>
        {!subtitle ? null :<p className="">{subtitle}</p>}
        <p className="text-current body-small">
          {mainContent}
        </p>

        <p className="text-current body-small">
          {subContent}
        </p>
      </article>
    </section>
  );
}
