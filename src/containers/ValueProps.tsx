import { Button } from "../components/Button";
import { ValuePropCard } from "../components/ValuePropCard";
import { classNames } from "../utils";

export interface ValueProps {
  buttonLabel: Button["label"];
  className?: string;
  items: Pick<ValuePropCard, "id" | "description" | "icon">[];
  onClick: Button["onClick"];
  title: string;
}
export function ValueProps({
  buttonLabel,
  className,
  onClick,
  items,
  title,
}: ValueProps) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-between px-16 pb-24 lg:mb-40",
        !className ? "" : className
      )}
    >
      <header className="w-full self-start xl:w-4/6">
        <h1 className="header-2 text-brand-dark-blue">{title}</h1>
      </header>
      <section className="mt-24 flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-12 lg:gap-y-0">
        {items.map((item) => (
          <ValuePropCard key={item.id} {...item} />
        ))}
      </section>
      <Button
        className="mt-10 w-full self-start lg:w-[28%] xl:w-[20%]"
        id="contact-us"
        label={buttonLabel}
        isPrimary
        onClick={onClick}
      />
    </div>
  );
}
