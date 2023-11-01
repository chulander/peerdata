import { Navigate, Routes, Route } from "react-router-dom";
import { useCallback, useState } from "react";
import Footer from "./containers/Footer";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import { Contact } from "./pages/Contact/Contact";
import Company from "./pages/Company";
import { navItems, footerItems, internalRoutes } from "./config";
import { classNames } from "./utils";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onChange = useCallback((val: boolean) => {
    setIsOpen(val);
  }, []);
  return (
    <div className="relative m-auto">
      <Nav
        className={classNames(
          "peerdata-container absolute z-10 w-full",
          isOpen ? "bg-brand-dark-blue" : ""
        )}
        items={navItems}
        onChange={onChange}
        isOpen={isOpen}
      />
      <Routes>
        <Route
          path={internalRoutes["home"].href}
          element={<Home className="" />}
        />
        <Route path={internalRoutes["company"].href} element={<Company />} />
        <Route path={internalRoutes["contact"].href} element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer className="peerdata-container" items={footerItems} />
    </div>
  );
}
