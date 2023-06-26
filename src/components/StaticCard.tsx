import { ReactNode } from "react";
import NavItem from "./NavItem";

export interface StaticCard {
  id: string;
  name: string;
  href: string;
  children: ReactNode;
  cta: string;
  image: string;
}
export function StaticCard(data: StaticCard) {
  return (
    <div
      key={data.id}
      className="space-y-4 rounded-3xl p-4 ring-1 ring-brand-blue hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:ring-brand-700 xl:p-10"
    >
      <div className="flex flex-col">
        <img className="mx-auto rounded w-full aspect-square" src={data.image} alt="man" />
      </div>
      <h3 id={data.id} className="text-lg font-bold leading-8 text-brand-700">
        {data.name}
      </h3>
      {data.children}
      <NavItem
        id={data.id}
        to={data.href}
        aria-describedby={data.id}
        className="block rounded-md bg-brand-blue px-3 py-2 text-center text-sm font-bold leading-6 text-white shadow-sm hover:bg-brand-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        {data.cta}
      </NavItem>
    </div>
  );
}
