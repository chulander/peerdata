import { NavLink, NavLinkProps } from "react-router-dom";
export type NavItemType = {
  to: NavLinkProps["to"];
  className?: string;
  children: React.ReactNode;
};

export default function NavItem({
  className,
  to,
  children,
}: NavItemType): JSX.Element {
  return (
    <NavLink
      className={`block text-teal-200 hover:text-white ${className}`}
      to={to}
    >
      {children}
    </NavLink>
  );
}
