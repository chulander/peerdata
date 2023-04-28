import NavItem from "../components/NavItem";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";


export function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-brand-700 hover:ring-brand-500">
                <span className="font-semibold text-brand-blue">
                  We’re hiring
                </span>
                <span className="h-4 w-px bg-brand-700" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
                  <span
                    className="absolute inset-0 text-brand-300"
                    aria-hidden="true"
                  />
                  See open positions
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-brand-700"
                    aria-hidden="true"
                  />
                </a>
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
