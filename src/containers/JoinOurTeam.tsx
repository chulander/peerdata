import { LinkButton } from "../components/LinkButton";
import { externalRoutes } from "../config";
import { classNames } from "../utils";

export interface JoinOurTeam {
  className?: string;
  title: string;
  mainContent: string;
}
export function JoinOurTeam({ className, title, mainContent }: JoinOurTeam) {
  return (
    <section
      className={classNames(
        "xl:max-w-1/4 mb-28 mt-24 lg:mt-52 flex w-full items-center justify-between",
        !className ? "" : className
      )}
    >
      <article className="flex w-full flex-col xl:basis-[66%] gap-y-10">
        <p className="text-[3.4rem] font-normal leading-[3.75rem] tracking-tight text-brand-dark-blue">
          {title}
        </p>

        <p className="text-[1.6rem] font-normal leading-7 tracking-tight text-brand-dark-blue">
          {mainContent}
        </p>
        <LinkButton className="text-[1.4rem]" to={externalRoutes.careers.href}>
          View all roles
        </LinkButton>
      </article>
    </section>
  );
}
