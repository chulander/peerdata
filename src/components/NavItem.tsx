import { NavLink, NavLinkProps } from "react-router-dom";
export type NavItemType = {
  to: NavLinkProps["to"];
  text: string;
};

export default function NavItem({ to, text }: NavItemType): JSX.Element {
  return (
    <NavLink
      to={to}
      className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
    >
      {text}
    </NavLink>
  );
}
