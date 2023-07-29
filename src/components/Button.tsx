import { MouseEventHandler } from "react";
import { classNames } from "../utils";

import {
  ArrowLongRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
export interface Button {
  className?: string;
  hasIcon?: boolean;
  type?: HTMLButtonElement["type"];
  id: string;
  isPrimary?: boolean;
  label: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
// const test: HTMLButtonElement["type"] = "button";
export function Button({
  className,
  hasIcon = true,
  // type = test,
  disabled = false,
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
        !disabled ? "" : "hover:cursor-not-allowed",
        !className ? "" : className
      )}
      disabled={disabled}
      name={id}
      id={id}
      onClick={onClick}
    >
      {!disabled ? label : "Submitting"}
      {!hasIcon ? null : !disabled ? (
        <span className="block">
          <ArrowLongRightIcon
            className={classNames(
              "-mr-2 h-8 w-full",
              isPrimary ? "text-white" : "text-brand-dark-blue"
            )}
            aria-hidden="true"
          />
        </span>
      ) : (
        <EllipsisHorizontalIcon
          className={classNames(
            "-mr-2 h-8 w-full",
            isPrimary ? "text-white" : "text-brand-dark-blue"
          )}
          aria-hidden="true"
        />
      )}
    </button>
  );
}
