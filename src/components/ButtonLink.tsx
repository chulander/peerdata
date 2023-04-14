import { Link } from "../types/Link";
import { NavLink } from "react-router-dom";

export type ButtonLink = Pick<Link, "id" | "href" | "label" | "theme">;
const buttonTheme = {
  PRIMARY: "bg-rose-600 hover:bg-rose-700",
  SECONDARY: "bg-primary hover:bg-primary",
  ALTERNATE: "bg-alternate hover:bg-alternate",
};
export function ButtonLink({ id, href, label, theme }: ButtonLink) {
  console.log('what is theme',theme)
  const colorClass = buttonTheme[theme];
  return (
    <NavLink
      key={id}
      to={href}
      className={`block w-full rounded px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto ${colorClass}`}
    >
      {label}
    </NavLink>
  );
}
