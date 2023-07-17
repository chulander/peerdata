import { forwardRef } from "react";
import { NavLink as _NavLink, NavLinkProps } from "react-router-dom";
export type NavItemType = {
  id: string;
  to: NavLinkProps["to"];
  className?: NavLinkProps["className"];
  children: React.ReactNode;
  target?: NavLinkProps["target"];
};

// const defaultClassname = "block text-teal-200 hover:text-white";
export default NavItem;
export function NavItem({
  className,
  id,
  to,
  children,
  target = "self" as NavItemType["target"],
}: NavItemType): JSX.Element {
  return (
    <_NavLink className={className} id={id} to={to} target={target}>
      {children}
    </_NavLink>
  );
}

export const NavItemWithRef = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { to, children, className, id, target } = props;
    return (
      <_NavLink ref={ref} id={id} to={to} className={className} target={target}>
        {children}
      </_NavLink>
    );
  }
);

NavItemWithRef.displayName = "NavItemWithRef";
