import { Navigate, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Nav, { NavType } from "./containers/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import DataOwner from "./pages/DataOwner/DataOwner";
import About from "./pages/About/queries/About";
import ContactUsForm from "./components/ContactUsForm";
import { ContactUs } from "./pages/Contact/Contact";

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
];
export default function App() {
  return (
    <div className="m-auto">
      <Nav className="w-full" items={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
