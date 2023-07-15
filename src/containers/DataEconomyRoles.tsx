import { Button } from "../components/Button";
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
    <div className={classNames("flex w-full", !className ? "" : className)}>
      <section
        className="flex flex-col items-center justify-between border border-solid border-brand-dark-blue px-12 py-14
      "
      >
        <header className="w-full">
          <h1 className="header-2 text-brand-dark-blue">{title}</h1>
        </header>
        <section className="mt-12 flex w-full flex-col gap-y-12 lg:flex-row lg:gap-x-12 lg:gap-y-0">
          {roles.map((item) => (
            <DataEconomyRoleCard key={item.id} {...item} />
          ))}
        </section>
        <Button
          className="xl-w-1/2 mt-8 w-full self-start lg:w-[30%] xl:w-[25%]"
          id="contact-us"
          label="Contact us"
          isPrimary
          onClick={() => {
            console.log("click");
          }}
        />
      </section>

      {/* <article className="flex flex-col gap-y-6 lg:basis-1/2"></article> */}
    </div>
  );
}
