import { Button } from "../components/Button";
import { ValuePropCard } from "../components/ValuePropCard";
import { LinkButtonInternalRoute } from "../components/LinkButton";
import { classNames } from "../utils";

export interface ValueProps {
  buttonLabel: Button["label"];
  className?: string;
  externalHref: string;
  items: Pick<ValuePropCard, "id" | "description" | "icon">[];
  title: string;
}
export function ValueProps({
  buttonLabel,
  className,
  externalHref,
  items,
  title,
}: ValueProps) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-between",
        !className ? "" : className
      )}
    >
      <header className="w-full self-start xl:w-8/12">
        <h2 className="peerdata-header">
          {title}
        </h2>
      </header>
      <section className="mt-16 flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-24 lg:gap-y-0">
        {items.map((item) => (
          <ValuePropCard key={item.id} {...item} />
        ))}
      </section>
      <LinkButtonInternalRoute
        className="mt-10 w-full self-start text-[1.35rem] lg:w-[28%] xl:w-[19%]"
        to={externalHref}
      >
        {buttonLabel}
      </LinkButtonInternalRoute>
    </div>
  );
}
