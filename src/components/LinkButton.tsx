import { classNames } from "../utils";
import { NavLink } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export interface LinkButton {
  className?: string;
  to: string;
  children?: React.ReactNode;
  isPrimary?: boolean;
}
export function LinkButton({
  className,
  isPrimary = true,
  to,
  children,
}: LinkButton) {
  return (
    <a
      className={classNames(
        "flex w-full lg:w-fit items-center justify-between px-4 py-3 font-medium tracking-normal",
        isPrimary
          ? "button-primary text-white"
          : "button-secondary text-brand-dark-blue",
        !className ? "" : className
      )}
      target="_blank"
      rel="noreferrer"
      href={to}
    >
      <span>{children}</span>
      <ArrowLongRightIcon
        className={classNames(
          "-mr-2 ml-20 h-8",
          isPrimary ? "text-white" : "text-brand-dark-blue"
        )}
        aria-hidden="true"
      />
    </a>
  );
}

export function LinkButtonInternalRoute({
  className,
  to,
  children,
  isPrimary = true,
}: LinkButton) {
  return (
    <NavLink
      className={classNames(
        "flex w-fit items-center justify-between px-4 py-3 font-medium tracking-normal",
        isPrimary
          ? "button-primary text-white"
          : "button-secondary text-brand-dark-blue",
        !className ? "" : className
      )}
      to={to}
    >
      {/* <span className="text-[1.4rem]">{children}</span> */}
      <span>{children}</span>

      <span className="block">
        <ArrowLongRightIcon
          className={classNames(
            "-mr-2 h-8 w-full",
            isPrimary ? "text-white" : "text-brand-dark-blue"
          )}
          aria-hidden="true"
        />
      </span>
    </NavLink>
  );
}
