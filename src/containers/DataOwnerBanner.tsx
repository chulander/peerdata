import { NavLink } from "react-router-dom";
export type DataOwnerBanner = {
  img: string;
};
export function DataOwnerBanner({ img }: DataOwnerBanner) {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Data Owners
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            With PeerData, you can make better business decisions in the face of
            stringent rules and intricate customer requirements, acquire and
            retain customers, and gain an advantage over your competitors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <NavLink
              to="/login"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Login
            </NavLink>

            <NavLink
              to="/contact"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      <img
        alt="Student"
        src={img}
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className="relative bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">Data Owners</h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            With PeerData, you can make better business decisions in the face of
            stringent rules and intricate customer requirements, acquire and
            retain customers, and gain an advantage over your competitors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <NavLink
              to="/login"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Login
            </NavLink>

            <NavLink
              to="/contact"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataOwnerBanner;
