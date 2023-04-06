import { Navigate, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import DataOwner from "./pages/DataOwner";
import About from "./pages/About";

export default function Example() {
  return (
    <div className="m-auto max-w-screen-2xl bg-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/data-owners" element={<DataOwner />} />
        <Route
          path="/about"
          element={
            <About img="https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=612x612&w=is&k=20&c=HYwuJmIim5Fr9xlm0ebEQtA_VuXxPhUixcYPkmRf2SU=" />
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}
