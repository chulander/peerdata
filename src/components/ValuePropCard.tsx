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
        "flex w-full flex-col",
        !className ? "" : className
      )}
    >
      <Icon name={icon} />
      <p className="body-small mb-10 mt-16  text-black">{description}</p>
    </article>
  );
}
