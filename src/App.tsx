import { Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";
import Home from "./pages/Home";

export default function Example() {
  return (
    <div className="bg-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
