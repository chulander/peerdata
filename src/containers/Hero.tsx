import NavItem from "../components/NavItem";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

export function Hero() {
  return (
    <div className="bg-home-banner bg-cover bg-center">
      <div className="relative isolate pt-14">
        <div className="mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className=" xs:flex xs:flex-col xs:items-center sm:block md:max-w-2xl lg:mx-0 lg:max-w-7xl lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-white hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:ring-brand-100">
                <span className="font-bold text-white">Learn More</span>
                <span className="h-4 w-px bg-white" aria-hidden="true" />
                <NavItem
                  id="contact"
                  to="/contact"
                  className="flex items-center gap-x-1"
                >
                  <span
                    className="absolute inset-0 text-white"
                    aria-hidden="true"
                  />
                  <span className="text-white">Contact Us</span>
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </NavItem>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl md:max-w-2xl lg:max-w-5xl">
              Powering and digitizing
              <br />
              Data economy of the future
            </h1>
            <p className="text-md mt-2 font-bold leading-8 text-white sm:mt-6 sm:text-2xl">
              Turning data into assets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
