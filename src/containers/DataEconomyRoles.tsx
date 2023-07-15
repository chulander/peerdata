import { DataEconomyRoleCard } from "../components/DataEconomyRoleCard";
import { classNames } from "../utils";

export interface DataEconomyRoles {
  className?: string;
  title: string;
  roles: Pick<DataEconomyRoleCard, "id" | "description" | "icon" | "title">[];
}
export function DataEconomyRoles({
  className,
  title,
  roles,
}: // mainContent,
// subContent,
DataEconomyRoles) {
  return (
    <div
      className={classNames(
        "flex w-full max-w-full",
        !className ? "" : className
      )}
    >
      <section
        className="flex w-full max-w-full flex-col items-center justify-between border border-solid border-brand-dark-blue px-12 py-14
      "
      >
        <header className="w-full">
          <h1 className="text-4xl/11 font-normal tracking-tighter text-brand-dark-blue">
            {title}
          </h1>
        </header>
        <section className="flex w-full gap-x-12">
          {roles.map((item) => (
            <DataEconomyRoleCard key={item.id} {...item} />
          ))}
        </section>
      </section>

      {/* <article className="flex flex-col gap-y-6 lg:basis-1/2"></article> */}
    </div>
  );
}
