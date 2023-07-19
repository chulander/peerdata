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
// const test: HTMLButtonElement["type"] = "button";
export function Button({
  className,
  hasIcon = true,
  // type = test,
  id,
  label,
  isPrimary = true,
  onClick,
}: Button) {
  return (
    <button
      className={classNames(
        "flex items-center px-4 py-3 font-medium tracking-normal",
        isPrimary ? "button-primary" : "button-secondary",
        isPrimary ? "text-white" : "text-brand-dark-blue",
        hasIcon ? "justify-between" : "justify-center",
        !className ? "" : className
      )}
      name={id}
      id={id}
      onClick={onClick}
    >
      {label}
      {!hasIcon ? null : (
        <span className="block">
          <ArrowLongRightIcon
            className={classNames(
              "-mr-2 h-8 w-full",
              isPrimary ? "text-white" : "text-brand-dark-blue"
            )}
            aria-hidden="true"
          />
        </span>
      )}
    </button>
  );
}
