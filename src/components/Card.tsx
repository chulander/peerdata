import { NavLink } from "react-router-dom";
export type Card = {
  name: string;
  to: string;
  image: string;
  description?: string;
};
export default function Card({
  name,
  image,
  to,
  description = `
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
  perferendis hic asperiores quibusdam quidem voluptates doloremque
  reiciendis nostrum harum. Repudiandae?
`,
}: Card) {
  return (
    <NavLink to={to} className="group relative block bg-black">
      <img
        alt="Developer"
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8  opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
