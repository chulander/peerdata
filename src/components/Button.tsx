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
        "flex items-center justify-between px-6 py-3",
        isPrimary ? "button-primary" : "button-secondary",
        !className ? "" : className
      )}
      name={id}
      id={id}
      onClick={onClick}
    >
      <span
        className={classNames(
          "text-[1.45rem]",
          isPrimary ? "text-white" : "text-brand-dark-blue"
        )}
      >
        {label}
      </span>
      {!hasIcon ? null : (
        <span className="block">
          <ArrowLongRightIcon
            className={classNames(
              "-mr-2 w-8",
              isPrimary ? "text-white" : "text-brand-dark-blue"
            )}
            aria-hidden="true"
          />
        </span>
      )}
    </button>
  );
}
