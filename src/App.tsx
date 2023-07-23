import { Navigate, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Nav, { NavItem } from "./containers/Nav";
import Home from "./pages/Home";
import { ContactUs } from "./pages/Contact/Contact";
import Company from "./pages/Company";

const navItems: NavItem[] = [
  {
    href: "/company",
    id: "compant",
    name: "Company",
  },
  {
    href: "/contact",
    id: "contact-us-nav",
    name: "Contact us",
  },
  {
    href: "https://ziessxud13f.typeform.com/to/O9Jgo0W3",
    id: "waitlist",
    name: "Join the waitlist",
    isCTA: true,
  },
];
const footerItems: NavItem[] = [
  {
    href: "/company",
    id: "company",
    name: "Company",
  },
  {
    href: "https://app.jazz.co/app/v2/job",
    id: "careers",
    name: "Careers",
  },
  {
    href: "/contact",
    id: "contact-us-footer",
    name: "Contact Us",
  },
  {
    href: "https://www.linkedin.com/in/kietttran/",
    id: "linkedin",
    name: "LinkedIn",
  },
  {
    href: "/privacy-policy",
    id: "privacy-policy",
    name: "Privacy Policy",
  },
];
export default function App() {
  return (
    <div className="relative m-auto">
      <Nav className="absolute z-10 w-full px-6" items={navItems} />
      <Routes>
        <Route path="/" element={<Home className="" />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer className="px-12" items={footerItems} />
    </div>
  );
}
