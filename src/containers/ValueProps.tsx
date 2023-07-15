import { Button } from "../components/Button";
import { ValuePropCard } from "../components/ValuePropCard";
import { classNames } from "../utils";

export interface ValueProps {
  className?: string;
  title: string;
  items: Pick<ValuePropCard, "id" | "description" | "icon">[];
  onClick: Button["onClick"];
}
export function ValueProps({ className, onClick, items, title }: ValueProps) {
  return (
    <div className={classNames("flex w-full", !className ? "" : className)}>
      <section className="flex flex-col items-center justify-between border border-solid border-brand-dark-blue px-12 py-14">
        <header className="w-full xl:w-4/6 self-start">
          <h1 className="header-2 text-brand-dark-blue">{title}</h1>
        </header>
        <section className="mt-12 flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-12 lg:gap-y-0">
          {items.map((item) => (
            <ValuePropCard key={item.id} {...item} />
          ))}
        </section>
        <Button
          className="mt-8 w-full self-start lg:w-[28%] xl:w-[20%]"
          id="contact-us"
          label="Contact us"
          isPrimary
          onClick={onClick}
        />
      </section>
    </div>
  );
}
