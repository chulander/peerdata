import { Button } from "../components/Button";
import { DataEconomyRoleCard } from "../components/DataEconomyRoleCard";
import { classNames } from "../utils";

export interface DataEconomyRoles {
  className?: string;
  title: string;
  items: Pick<DataEconomyRoleCard, "id" | "description" | "icon" | "title">[];
  onClick: Button["onClick"];
}
export function DataEconomyRoles({
  className,
  onClick,
  items,
  title,
}: DataEconomyRoles) {
  return (
    <div className={classNames("flex w-full", !className ? "" : className)}>
      <section
        className="flex flex-col items-center justify-between border border-solid border-brand-dark-blue px-12 py-14
      "
      >
        <header className="w-full">
          <h1 className="header-2 text-brand-dark-blue">{title}</h1>
        </header>
        <section className="mt-12 flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-12 lg:gap-y-0">
          {items.map((item) => (
            <DataEconomyRoleCard key={item.id} {...item} />
          ))}
        </section>
        <Button
          className="mt-10 w-full self-start lg:w-[28%] xl:w-[20%]"
          id="contact-us"
          label="Contact us"
          isPrimary
          onClick={onClick}
        />
      </section>

      {/* <article className="flex flex-col gap-y-6 lg:basis-1/2"></article> */}
    </div>
  );
}
