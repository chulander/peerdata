import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavItem, { NavItemWithRef } from "../components/NavItem";
import { classNames } from "../utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Anchor } from "../components/Anchor";

const defaultClassname =
  "hover:bg-brand-300 border border-transparent border-solid";
const activeClassname = `${defaultClassname} border border-white border-solid`;
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
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div
            className={classNames(
              "flex",
              !className ? "" : className
            )}
          >
            <div className="flex h-16 w-full items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <NavItem id="home" to="/">
                    <Icon className="text-brand-green" name="logo" />
                  </NavItem>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex lg:space-x-12">
                  {items.map(({ id, name, href, isCTA }) =>
                    !isCTA ? (
                      <NavItem
                        id={id}
                        key={id}
                        // eslint-disable-next-line react/no-children-prop
                        children={name}
                        to={href}
                        className={({ isActive, isPending }) =>
                          classNames(
                            "body-x-small",
                            isActive ? activeClassname : defaultClassname
                          )
                        }
                      />
                    ) : (
                      <NavItem
                        id={id}
                        key={id}
                        // eslint-disable-next-line react/no-children-prop
                        children={name}
                        to={href}
                        className={({ isActive, isPending }) =>
                          classNames(
                            "body-x-small border bo",
                            isActive ? activeClassname : defaultClassname
                          )
                        }
                      />
                    )
                  )}
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-white-400 inline-flex items-center justify-center rounded-md p-2 hover:bg-brand-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-black"
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
                  // eslint-disable-next-line react/no-children-prop
                  children={name}
                  className="text-md block rounded-md px-3 py-2 font-bold text-white"
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
