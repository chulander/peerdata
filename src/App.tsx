import { Navigate, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import DataOwner from "./pages/DataOwner/DataOwner";
import About from "./pages/About/queries/About";
import { ContactUs } from "./pages/Contact/Contact";

export default function App() {
  return (
    <div className="m-auto max-w-screen-2xl">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/data-owner" element={<DataOwner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
