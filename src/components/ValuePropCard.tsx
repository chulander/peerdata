import { classNames } from "../utils";
import { Icon } from "./Icon";

export interface ValuePropCard {
  id: string;
  className?: string;
  icon: Icon["name"];
  description: string;
}
export function ValuePropCard({ className, description, icon }: ValuePropCard) {
  return (
    <article
      className={classNames(
        "flex w-full flex-col items-center lg:items-start",
        !className ? "" : className
      )}
    >
      <Icon name={icon} />
      <p className="mb-10 mt-12 text-[1.6rem] leading-7 tracking-tight  text-black">
        {description}
      </p>
    </article>
  );
}
