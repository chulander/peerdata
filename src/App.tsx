import { Navigate, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Nav, { NavType } from "./containers/Nav";
import Home from "./pages/Home";
import About from "./pages/About/About";
import { ContactUs } from "./pages/Contact/Contact";
import dataEconomyRoles from "./payload/data_econonmy_roles.json";
import valuePropositionItems from "./payload/value_propositions_items.json";
import { DataEconomyRoles } from "./containers/DataEconomyRoles";
import { ValueProps } from "./containers/ValueProps";

const navItems: NavType[] = [
  {
    href: "/careers",
    id: "careers",
    name: "Careers",
  },
  {
    href: "/about",
    id: "about",
    name: "About us",
  },
  {
    href: "/contact",
    id: "contact",
    name: "Contact us",
  },
  {
    href: "/newsletter",
    id: "newsletter",
    name: "Newsletter",
  },
];
export default function App() {
  return (
    <div className="m-auto">
      <Nav className="w-full" items={navItems} />
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
