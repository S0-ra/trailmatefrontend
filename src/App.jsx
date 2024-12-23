import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import AboutPage from "./pages/AboutPage";
import BecomeSellerPage from "./pages/BecomeSellerPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import SingleProductPage from "./pages/SingleProductPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import VendorDashboardPage from "./pages/VendorDashboardPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/become-seller" element={<BecomeSellerPage />}></Route>
          <Route path="/category" element={<ProductListPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/product/:id" element={<SingleProductPage />}></Route>
          <Route path="/dashboard-admin" element={<AdminDashboardPage />}></Route>
          <Route path="/dashboard-vendor" element={<VendorDashboardPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
