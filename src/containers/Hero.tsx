import NavItem from "../components/NavItem";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

export function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-screen-2xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto lg:mx-0 lg:flex-auto xs:flex xs:flex-col xs:items-center sm:block md:max-w-2xl">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-brand-500 hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:ring-brand-700">
                <span className="font-semibold text-brand-blue">
                  We’re hiring
                </span>
                <span className="h-4 w-px bg-brand-700" aria-hidden="true" />
                <NavItem
                  id="careers"
                  to="/careers"
                  className="flex items-center gap-x-1"
                >
                  <span
                    className="absolute inset-0 text-brand-300"
                    aria-hidden="true"
                  />
                  See open positions
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-brand-700"
                    aria-hidden="true"
                  />
                </NavItem>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-brand-700 sm:text-6xl">
              A better way to manage data
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-500">
              Esse id magna consectetur fugiat non dolor in ad laboris magna
              laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam
              voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
