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
        "flex w-full max-w-full flex-col border border-brand-dark-blue px-4 pt-10",
        !className ? "" : className
      )}
    >
      <Icon name={icon} />
      <h4 className="mt-12 text-4xl/8 font-bold text-brand-dark-blue">
        {title}
      </h4>
      <p className="mt-4 text-3xl/9 font-normal tracking-tighter text-brand-dark-blue">
        {description}
      </p>
    </article>
  );
}
