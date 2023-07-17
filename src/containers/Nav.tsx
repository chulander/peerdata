import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, NavLinkWithRef } from "../components/NavLink";
import { classNames } from "../utils";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { Icon } from "../components/Icon";

// const defaultClassname =
//   "hover:bg-brand-300 border border-transparent border-solid";
// const activeClassname = `${defaultClassname} border border-white border-solid`;
export interface Nav {
  className?: string;
  items: NavItem[];
}

export interface NavItem {
  href: string;
  id: string;
  name: string;
  isCTA?: boolean;
}

export function Nav({ className, items }: Nav) {
  return (
    <Disclosure
      as="nav"
      className={classNames("py-4", !className ? "" : className)}
    >
      {({ open }) => (
        <>
          <div>
            <div className="flex w-full basis-full items-center justify-between">
              <div className="flex items-center">
                <div className="py-2">
                  <NavLink id="home" to="/">
                    <Icon className="text-brand-green" name="logo" />
                  </NavLink>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex sm:space-x-4 md:space-x-8">
                  {items.map(({ id, name, href, isCTA }) =>
                    !isCTA ? (
                      <NavLink
                        id={id}
                        key={id}
                        // eslint-disable-next-line react/no-children-prop
                        children={name}
                        to={href}
                        className={({ isActive, isPending }) =>
                          classNames(
                            "body-x-small flex items-center ",
                            isActive ? "" : ""
                          )
                        }
                      />
                    ) : (
                      <NavLink
                        id={id}
                        key={id}
                        to={href}
                        target="_blank"
                        className={({ isActive, isPending }) =>
                          classNames(
                            "button-secondary flex items-center justify-between space-x-16 py-2 pl-3 pr-1",
                            isActive ? "" : ""
                          )
                        }
                      >
                        <span className="body-x-small text-black">{name}</span>
                        <span className="block">
                          <Icon
                            className="-mr2 w-8"
                            name="header-calendar"
                            aria-hidden="true"
                          />
                        </span>
                      </NavLink>
                    )
                  )}
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-white-400 hover:bg-brand-300 inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-10 w-10 text-brand-green"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-10 w-10 text-brand-green"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex basis-full flex-col space-y-1 px-2 pb-3 pt-2">
              {items.map(({ id, href, name, isCTA }) =>
                !isCTA ? (
                  <Disclosure.Button
                    key={id}
                    as={NavLinkWithRef}
                    id={id}
                    to={href}
                    // eslint-disable-next-line react/no-children-prop
                    children={name}
                    className="body-x-small text-black"
                  />
                ) : (
                  <Disclosure.Button
                    key={id}
                    as={NavLinkWithRef}
                    id={id}
                    to={href}
                    // eslint-disable-next-line react/no-children-prop
                    className="button-secondary flex items-center justify-between space-x-16 py-2 pl-3 pr-1"
                  >
                    <span className="body-x-small text-black">{name}</span>
                    <span className="block">
                      <Icon
                        className="-mr2 w-8"
                        name="header-calendar"
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default Nav;
