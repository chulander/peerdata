import { MouseEventHandler } from "react";
import { classNames } from "../utils";

import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
export interface Button {
  className?: string;
  hasIcon?: boolean;
  type?: HTMLButtonElement["type"];
  id: string;
  isPrimary?: boolean;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export function Button({
  className,
  hasIcon = true,
  type = "button",
  id,
  label,
  isPrimary = true,
  onClick,
}: Button) {
  return (
    <button
      className={classNames(
        "flex w-full items-center justify-between px-6 py-3 text-xl/7 font-normal tracking-tighter focus:outline-dashed focus:outline-2 focus:outline-offset-4 focus:outline-brand-green",
        isPrimary
          ? "border-2 border-solid border-transparent bg-brand-dark-blue text-white hover:border-brand-green hover:bg-brand-green"
          : "border-2 border-solid border-brand-dark-blue bg-white text-brand-dark-blue hover:border-brand-dark-blue hover:bg-brand-light-background",
        !className ? "" : className
      )}
      type={type}
      name={id}
      id={id}
      onClick={onClick}
    >
      <span className="block">{label}</span>
      {!hasIcon ? null : (
        <span className="block">
          <ArrowLongRightIcon
            className="-mr-2 w-8 text-current"
            aria-hidden="true"
          />
        </span>
      )}
    </button>
  );
}
