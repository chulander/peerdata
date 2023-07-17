import { Navigate, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Nav, { NavItem } from "./containers/Nav";
import Home from "./pages/Home";
import About from "./pages/About/About";
import { ContactUs } from "./pages/Contact/Contact";
import dataEconomyRoles from "./payload/data_econonmy_roles.json";
import valuePropositionItems from "./payload/value_propositions_items.json";
import { DataEconomyRoles } from "./containers/DataEconomyRoles";
import { ValueProps } from "./containers/ValueProps";

const navItems: NavItem[] = [
  {
    href: "/company",
    id: "compant",
    name: "Company",
  },
  {
    href: "/contact-us",
    id: "contact-us",
    name: "Contact us",
  },
  {
    href: "/waitlist",
    id: "waitlist",
    name: "Join the waitlist",
    isCTA: true,
  },
];
export default function App() {
  return (
    <div className="m-auto">
      <Nav className="w-full px-8 py-4" items={navItems} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              className=""
              roles={dataEconomyRoles.data as DataEconomyRoles["items"]}
              values={valuePropositionItems.data as ValueProps["items"]}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer className="lg:mx-12" />
    </div>
  );
}
