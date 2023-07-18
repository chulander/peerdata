import { Button } from "../components/Button";
import { ValuePropCard } from "../components/ValuePropCard";
import { classNames } from "../utils";

export interface CompetitiveEdge {
  buttonLabel: Button["label"];
  className?: string;
  items: Pick<ValuePropCard, "id" | "description" | "icon">[];
  onClick: Button["onClick"];
  title: string;
}
export function CompetitiveEdge({
  buttonLabel,
  className,
  onClick,
  items,
  title,
}: CompetitiveEdge) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-between px-16 pb-24 lg:mb-40",
        !className ? "" : className
      )}
    >
      <header className="w-full self-start xl:w-5/6">
        <h1 className="text-[3.15rem] font-thin leading-8 tracking-tighter text-black">
          {title}
        </h1>
      </header>
      <section className="mt-16 flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-24 lg:gap-y-0">
        {items.map((item) => (
          <ValuePropCard key={item.id} {...item} />
        ))}
      </section>
      <Button
        className="mt-10 w-full self-start text-[1.35rem] lg:w-[28%] xl:w-[19%]"
        id="contact-us"
        label={buttonLabel}
        isPrimary
        onClick={onClick}
      />
    </div>
  );
}
