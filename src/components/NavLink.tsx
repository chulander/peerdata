import { forwardRef } from "react";
import { NavLink as _NavLink, NavLinkProps } from "react-router-dom";
export type NavLink = {
  id: string;
  to: NavLinkProps["to"];
  className?: NavLinkProps["className"];
  children: React.ReactNode;
  target?: NavLinkProps["target"];
};

// const defaultClassname = "block text-teal-200 hover:text-white";
export default NavLink;
export function NavLink({
  className,
  id,
  to,
  children,
  target = "_self" as NavLink["target"],
}: NavLink): JSX.Element {
  return (
    <_NavLink className={className} id={id} to={to} target={target}>
      {children}
    </_NavLink>
  );
}

export const NavLinkWithRef = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { to, children, className, id, target } = props;
    return (
      <_NavLink ref={ref} id={id} to={to} className={className} target={target}>
        {children}
      </_NavLink>
    );
  }
);

NavLinkWithRef.displayName = "NavLinkWithRef";
