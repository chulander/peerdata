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
        "flex w-full max-w-full flex-col border border-brand-dark-blue px-6 pt-10",
        !className ? "" : className
      )}
    >
      <Icon name={icon} />
      <h4 className="mt-20 text-2xl/8 font-bold text-brand-dark-blue">
        {title}
      </h4>
      <p className="mb-10 mt-4 text-2xl/8 font-normal tracking-tighter text-brand-dark-blue">
        {description}
      </p>
    </article>
  );
}
