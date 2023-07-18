import { classNames } from "../utils";
import { Icon } from "./Icon";

export interface DataEconomyRoleCard {
  id: string;
  className?: string;
  icon: Icon["name"];
  title: string;
  description: string;
}
export function DataEconomyRoleCard({
  className,
  description,
  title,
  icon,
}: DataEconomyRoleCard) {
  return (
    <article
      className={classNames(
        "flex w-full max-w-full flex-col border border-brand-dark-blue px-8 pt-8",
        !className ? "" : className
      )}
    >
      <Icon name={icon} />
      <h4 className="mt-20 text-brand-dark-blue body-small font-medium">
        {title}
      </h4>
      <p className="mb-14 mt-4 text-brand-dark-blue font-light text-[1.6rem] leading-7 tracking-tight">
        {description}
      </p>
    </article>
  );
}
