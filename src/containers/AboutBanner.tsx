import { NavLink } from "react-router-dom";
export function AboutBanner() {
  return (
    <section className="overflow-hidden border-2 bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            About PeerData
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            With PeerData, you can make better business decisions in the face of
            stringent rules and intricate customer requirements, acquire and
            retain customers, and gain an advantage over your competitors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
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

export default AboutBanner;
