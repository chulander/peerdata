import { Button } from "../components/Button";
import { classNames } from "../utils";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export interface JoinOurTeam {
  className?: string;
  title: string;
  mainContent: string;
}
export function JoinOurTeam({ className, title, mainContent }: JoinOurTeam) {
  return (
    <section
      className={classNames(
        "xl-max-w-1/4 mb-40 flex w-full items-center justify-between",
        !className ? "" : className
      )}
    >
      <article className="flex w-full flex-col xl:basis-[33%] xl:gap-y-10">
        <p className="text-[3.4rem] font-normal leading-[3.75rem] tracking-tight text-brand-dark-blue">
          {title}
        </p>

        <p className="text-[1.3rem] font-thin leading-[1.5rem] tracking-tighter text-brand-dark-blue ">
          {mainContent}
        </p>

        <a
          className="button-primary flex items-center px-4 py-3 font-medium tracking-normal w-fit"
          target="_blank"
          rel="noreferrer"
          href="https://app.jazz.co/app/v2/job"
        >
          <span className="text-[1.4rem]">View all roles</span>
          <ArrowLongRightIcon
            className={classNames("-mr-2 ml-20 h-8", "text-white")}
            aria-hidden="true"
          />
        </a>
      </article>
    </section>
  );
}
