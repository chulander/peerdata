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
        "flex w-full max-w-full flex-col pt-8",
        !className ? "" : className
      )}
    >
      <div className="flex justify-center lg:flex-col">
        <Icon className="mr-6 self-end lg:mr-0 lg:self-start" name={icon} />
        <h4
          className="body-small mt-20 font-medium
          text-black"
        >
          {title}
        </h4>
      </div>
      <p className="mb-14 mt-4 text-[1.6rem] font-light leading-7 tracking-tight text-black">
        {description}
      </p>
    </article>
  );
}
