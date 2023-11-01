import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, NavLinkWithRef } from "../components/NavLink";
import { classNames } from "../utils";
import { Icon } from "../components/Icon";

export interface Nav {
  className?: string;
  items: NavItem[];
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
}

export interface NavItem {
  href: string;
  id: string;
  name: string;
  isCTA?: boolean;
  target?: NavLink["target"];
}

export function Nav({ className, items, onChange }: Nav) {
  return (
    <Disclosure
      as="nav"
      className={classNames("py-6", !className ? "" : className)}
    >
      {({ open }) => {
        onChange(open);

        return (
          <>
            <div className={!open ? "" : "bg-brand-dark-blue"}>
              <div className="flex w-full basis-full items-center justify-between">
                <div className="flex items-center">
                  <NavLink className="focus" id="home" to="/">
                    <Icon
                      className={classNames(
                        "ml-2 h-10 w-52 pt-2 text-brand-green md:ml-0",
                        open ? "text-brand-light-background" : ""
                      )}
                      name="logo"
                    />
                  </NavLink>
                </div>

                <div className="hidden md:ml-6 lg:block">
                  <div className="flex md:space-x-4 lg:space-x-8">
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
                              "focus flex items-center text-lg ",
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
                          <span className="text-lg font-medium text-black">
                            {name}
                          </span>
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
                <div className="focus flex sm:-mr-2 lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    className={classNames(
                      "focus inline-flex items-center justify-center rounded-md border-brand-light-background p-2 text-brand-light-background hover:bg-brand-light-background hover:text-brand-light-background",
                      !open ? "" : "border"
                    )}
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-10 w-10 text-brand-light-background hover:text-brand-dark-blue"
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

            <Disclosure.Panel className="lg:hidden">
              <div className="mt-10 flex basis-full flex-col space-y-3 pb-3 pt-2">
                {items.map(({ id, href, name, isCTA }) =>
                  !isCTA ? (
                    <Disclosure.Button
                      key={id}
                      as={NavLinkWithRef}
                      id={id}
                      to={href}
                      // eslint-disable-next-line react/no-children-prop
                      children={name}
                      className="body-x-small text-brand-light-background"
                    />
                  ) : (
                    <Disclosure.Button
                      key={id}
                      as={NavLinkWithRef}
                      id={id}
                      to={href}
                      // eslint-disable-next-line react/no-children-prop
                      className="button-secondary flex items-center justify-between space-x-16 pr-1"
                    >
                      <span className="body-x-small text-brand-light-background">
                        {name}
                      </span>
                      <span className="block text-brand-light-background">
                        <Icon
                          className="-mr2 w-8 text-brand-light-background"
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
        );
      }}
    </Disclosure>
  );
}
export default Nav;
