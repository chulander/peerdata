import { Navigate, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact/Contact";
import Company from "./pages/Company";
import { navItems, footerItems, internalRoutes } from "./config";

export default function App() {
  return (
    <div className="relative m-auto">
      <Nav className="absolute z-10 w-full px-6" items={navItems} />
      <Routes>
        <Route
          path={internalRoutes["home"].href}
          element={<Home className="" />}
        />
        <Route path={internalRoutes["company"].href} element={<Company />} />
        <Route path={internalRoutes["contact"].href} element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer className="px-12" items={footerItems} />
    </div>
  );
}
