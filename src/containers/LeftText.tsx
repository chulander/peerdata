import { classNames } from "../utils";

export interface LeftText {
  className?: string;
  title: string;
  content: string;
  subContent: string;
}
export function LeftText({ className, title, content, subContent }: LeftText) {
  return (
    <section
      className={classNames(
        "flex w-full max-w-full items-center justify-between gap-x-10",
        !className ? "" : className
      )}
    >
      <article className="flex flex-col lg:basis-1/2 gap-y-6">
        <header>
          <h3 className="text-xl/8 font-normal uppercase tracking-tighter text-brand-green">
            {title}
          </h3>
        </header>
        <p className="text-4xl/10 font-normal tracking-tighter">{content}</p>

        <p className="text-3xl/9 font-normal tracking-tighter">{subContent}</p>
      </article>
    </section>
  );
}
