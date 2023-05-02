import { forwardRef } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
export type NavItemType = {
  id: string;
  to: NavLinkProps["to"];
  className?: NavLinkProps["className"];
  children: React.ReactNode;
};

// const defaultClassname = "block text-teal-200 hover:text-white";
export default NavItem;
export function NavItem({
  className,
  id,
  to,
  children,
}: NavItemType): JSX.Element {
  return (
    <NavLink className={className} id={id} to={to}>
      {children}
    </NavLink>
  );
}

export const NavItemWithRef = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { to, children, className, id } = props;
    return (
      <NavLink ref={ref} id={id} to={to} className={className}>
        {children}
      </NavLink>
    );
  }
);

NavItemWithRef.displayName = "NavItemWithRef";
