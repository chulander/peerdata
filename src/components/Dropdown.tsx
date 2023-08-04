import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../utils";

export type DropdownType = {
  items: Array<{ id: string; name: string }>;
  className?: string;
  disabled?: boolean;
  value: null | { id: string; name: string };
  onChange: (value: { id: string; name: string }) => void;
};
export function Dropdown({
  className,
  items,
  disabled = false,
  onChange,
  value,
}: DropdownType) {
  return (
    <Listbox disabled={disabled} value={value} by="id" onChange={onChange}>
      {({ open }) => (
        <>
          <div
            className={classNames("relative mt-2", !className ? "" : className)}
          >
            <Listbox.Button className="block w-full border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-brand-dark-blue placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-inset focus:ring-brand-dark-blue sm:text-sm sm:leading-6 focus">
              <span className="block truncate text-left text-black">
                {!value ? "Select one" : value.name}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {items.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-brand-green text-black" : "text-black",
                        "relative cursor-default select-none py-2 pl-8 pr-4"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-brand-700",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default Dropdown;
