import { Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function Example() {
  return (
    <div className="bg-white">
      <Nav type="light" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}
