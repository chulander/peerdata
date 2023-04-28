import NavItem from "./NavItem";

export interface Card {
  id: string;
  name: string;
  href: string;
  description: string;
  cta: string;
  image: string;
  featured?: boolean;
}
export function Card(data: Card) {
  return (
    <div
      key={data.id}
      className="space-y-4 rounded-3xl p-4 ring-1 ring-brand-blue hover:ring-brand-700 xl:p-10"
    >
      <div className="flex flex-col">
        <img className="mx-auto rounded" src={data.image} alt="man" />
      </div>
      <h3
        id={data.id}
        className="text-lg font-semibold leading-8 text-brand-700"
      >
        {data.name}
      </h3>
      <p className="text-sm leading-6 text-brand-500">{data.description}</p>
      <NavItem
        to={data.href}
        aria-describedby={data.id}
        className="block rounded-md bg-brand-blue px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brand-blue/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        {data.cta}
      </NavItem>
    </div>
  );
}
