import NavItem from "../components/NavItem";

export default function Footer() {
  return (
    <footer className="absolute flex w-full items-center justify-center bg-teal-500 lg:flex lg:items-center">
      <div className="m-auto p-6 text-sm">
        <NavItem to="/company" text="Company Information"></NavItem>
        <NavItem to="/faq" text="F.A.Q"></NavItem>
        <NavItem to="/legal" text="Legal"></NavItem>
      </div>
    </footer>
  );
}
