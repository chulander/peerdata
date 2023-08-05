import { DataEconomyRoleCard } from "../components/DataEconomyRoleCard";
import { LinkButtonInternalRoute } from "../components/LinkButton";
import { classNames } from "../utils";
import { internalRoutes } from "../config";

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
        className="pt-8 flex flex-col items-center justify-between lg:pb-24 lg:pt-16
      "
      >
        <header className="w-full">
          <h1 className="header-2 text-brand-dark-blue lg:text-[4.1rem] lg:leading-10 lg:tracking-tighter">
            {title}
          </h1>
        </header>
        <section className="mt-8 lg:mt-16 flex w-full flex-col gap-y-6 lg:flex-row lg:gap-x-16 lg:gap-y-0">
          {items.map((item) => (
            <DataEconomyRoleCard key={item.id} {...item} />
          ))}
        </section>

        <LinkButtonInternalRoute
          className="mt-10 w-full self-start text-[1.35rem] lg:w-[28%] xl:w-[19%]"
          to={internalRoutes.contact.href}
        >
          {buttonLabel}
        </LinkButtonInternalRoute>
      </section>
    </div>
  );
}
