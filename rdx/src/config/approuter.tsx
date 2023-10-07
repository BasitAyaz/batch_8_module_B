import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../pages/products";
import Cart from "../pages/cart";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}
