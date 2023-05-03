import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavItem, { NavItemWithRef } from "../components/NavItem";
import { classNames } from "../utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const defaultClassname =
  "hover:bg-brand-300 border border-transparent border-solid";
const activeClassname = `${defaultClassname} border border-white border-solid`;
export interface Nav {
  className?: string;
  items: NavType[];
}

export interface NavType {
  href: string;
  id: string;
  name: string;
}

export function Nav({ className, items }: Nav) {
  return (
    <Disclosure
      as="nav"
      className={`bg-gradient bg-cover bg-center bg-origin-border ${className}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 w-full items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <NavItem id="home" to="/">
                    <img
                      className="h-16 w-auto rounded-md text-white"
                      src="https://media.graphassets.com/ZTEzJmSoRYGwcyShcGQ2"
                      alt="PeerData"
                    />
                  </NavItem>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {items.map(({ id, name, href }) => (
                    <NavItem
                      id={id}
                      key={id}
                      children={name}
                      to={href}
                      className={({ isActive, isPending }) =>
                        classNames(
                          isActive ? activeClassname : defaultClassname,
                          "text-md rounded-md px-3 py-2 font-medium text-white focus-visible:border-none focus-visible:border-opacity-0"
                        )
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-white-400 inline-flex items-center justify-center rounded-md p-2 hover:bg-brand-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {items.map(({ id, href, name }) => (
                <Disclosure.Button
                  key={id}
                  as={NavItemWithRef}
                  id={id}
                  to={href}
                  children={name}
                  className="text-md block rounded-md px-3 py-2 font-medium text-white"
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default Nav;
