import { DataEconomyRoleCard } from "../components/DataEconomyRoleCard";
import { LinkButtonInternalRoute } from "../components/LinkButton";
import { classNames } from "../utils";

export interface DataEconomyRoles {
  buttonLabel: string;
  className?: string;
  title: string;
  items: Pick<DataEconomyRoleCard, "id" | "description" | "icon" | "title">[];
}
export function DataEconomyRoles({
  buttonLabel,
  className,
  items,
  title,
}: DataEconomyRoles) {
  return (
    <div className={classNames("flex w-full", !className ? "" : className)}>
      <section
        className="flex flex-col items-center justify-between pb-24 pt-16
      "
      >
        <header className="w-full">
          <h1 className="text-[4.1rem] leading-10 tracking-tighter text-brand-dark-blue">
            {title}
          </h1>
        </header>
        <section className="mt-16 flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-16 lg:gap-y-0">
          {items.map((item) => (
            <DataEconomyRoleCard key={item.id} {...item} />
          ))}
        </section>

        <LinkButtonInternalRoute
          className="mt-10 w-full self-start text-[1.35rem] lg:w-[28%] xl:w-[19%]"
          to="/contact"
        >
          {buttonLabel}
        </LinkButtonInternalRoute>
      </section>
    </div>
  );
}
