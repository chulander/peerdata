import { forwardRef } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { classNames } from "../utils";
export type Anchor = {
  id: string;
  to: NavLinkProps["to"];
  // className?: NavLinkProps["className"];
  className?: string;
  children?: React.ReactNode;
  target?: NavLinkProps["target"];
};
// const defaultClassname = "block text-teal-200 hover:text-white";
export default Anchor;
export function Anchor({
  className,
  id,
  to,
  children,
  target,
}: Anchor): JSX.Element {
  return (
    <NavLink
      id={id}
      to={to}
      target={target}
      className={classNames("anchor focus", !className ? "" : className)}
    >
      {children}
    </NavLink>
  );
}

export const AnchorWithRef = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { to, children, className, id } = props;
    return (
      <NavLink
        ref={ref}
        id={id}
        to={to}
        className={`anchor focus ${className}`}
      >
        {children}
      </NavLink>
    );
  }
);

AnchorWithRef.displayName = "AnchorWithRef";
