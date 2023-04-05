import { Navigate, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import DataOwner from "./pages/DataOwner";
import About from "./pages/About";

export default function Example() {
  return (
    <div className="bg-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/data-owners" element={<DataOwner />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
