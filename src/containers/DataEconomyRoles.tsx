import { Button } from "../components/Button";
import { DataEconomyRoleCard } from "../components/DataEconomyRoleCard";
import { classNames } from "../utils";

export interface DataEconomyRoles {
  buttonLabel: Button["label"];
  className?: string;
  title: string;
  items: Pick<DataEconomyRoleCard, "id" | "description" | "icon" | "title">[];
  onClick: Button["onClick"];
}
export function DataEconomyRoles({
  buttonLabel,
  className,
  items,
  onClick,
  title,
}: DataEconomyRoles) {
  return (
    <div className={classNames("flex w-full", !className ? "" : className)}>
      <section
        className="flex flex-col items-center justify-between border border-solid border-brand-dark-blue px-16 pb-24 pt-16
      "
      >
        <header className="w-full">
          <h1 className="text-[4.1rem] leading-10 text-brand-dark-blue tracking-tighter">{title}</h1>
        </header>
        <section className="mt-16 flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-16 lg:gap-y-0">
          {items.map((item) => (
            <DataEconomyRoleCard key={item.id} {...item} />
          ))}
        </section>
        <Button
          className="mt-10 w-full self-start lg:w-[28%] xl:w-[19%]"
          id="contact-us"
          label={buttonLabel}
          isPrimary
          onClick={onClick}
        />
      </section>
    </div>
  );
}
