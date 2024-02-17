import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/scrollToTop";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { BecomeSupplier } from "./pages/BecomeSupplier/BecomeSupplier";
import { SuccessStories } from "./pages/Blog/SuccessStories/SuccessStories";
import { Careers } from "./pages/Careers/Careers";
import { SupplierForm } from "./components/SupplierForm/SupplierForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { FeaturedStories } from "./pages/Blog/FeaturedStories/FeaturedStories";
import { BrowseSupplies } from "./pages/BrowseSupplies/BrowseSupplies";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="become-supplier" element={<BecomeSupplier />} />{" "}
        <Route path="success-stories/:blog_id" element={<SuccessStories />} />{" "}
        <Route path="careers" element={<Careers />} />{" "}
        <Route path="supplier-form" element={<SupplierForm />} />{" "}
        <Route path="login-form" element={<LoginForm />} />{" "}
        <Route path="featured-stories" element={<FeaturedStories />} />{" "}
        <Route path="browse-supplies" element={<BrowseSupplies />} />{" "}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
