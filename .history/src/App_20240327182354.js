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
import { AllSupplies } from "./pages/AllSupplies/AllSupplies";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { VerifiedSupplier } from "./pages/VerifiedSupplier/VerifiedSupplier";
import CancellationPolicy from "./pages/CancellationPolicy/CancellationPolicy";
import SearchedResults from "./pages/SearchedResults/SearchedResults";
import SuppliersStore from "./pages/SuppliersStore/SuppliersStore";
import { Onboarding1 } from "./pages/Onboarding/Onboarding1";
import { Onboarding2 } from "./pages/Onboarding/Onboarding2";
import { Onboarding3 } from "./pages/Onboarding/Onboarding3";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { DashboardLayout } from "./pages/DashboardLayout/DashboardLayout";
import { BuyProducts } from "./pages/BuyProducts/BuyProducts";
import { BusinessDetail } from "./pages/BusinessDetail/BusinessDetail";
import FInances from "./pages/FInances/FInances";
import { CompanyDetail } from "./pages/CompanyDetail/CompanyDetail";
import { CompanyLocation } from "./pages/CompanyLocation/CompanyLocation";
import { SubmitPage } from "./pages/SumitPage/SubmitPage";
import { SellProducts } from "./pages/SellProducts/SellProducts";
import { OverviewDashboard } from "./pages/OverviewDashboard/OverviewDashboard";
import ProductRequests from "./pages/ProductRequests/ProductRequests";
import { Messages } from "./pages/Messages/Messages";

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
        <Route path="all-supplies" element={<AllSupplies />} />{" "}
        <Route path="about-us" element={<AboutUs />} />{" "}
        <Route path="verified-supplier" element={<VerifiedSupplier />} />{" "}
        <Route path="cancellation-policy" element={<CancellationPolicy />} />{" "}
        <Route path="suppliers-store" element={<SuppliersStore />} />{" "}
        <Route path="onboarding1" element={<Onboarding1 />} />{" "}
        <Route path="onboarding2" element={<Onboarding2 />} />{" "}
        <Route path="onboarding3" element={<Onboarding3 />} />{" "}
        <Route path="searched-results/:cat_id" element={<SearchedResults />} />
        {/* <Route path="dashboard" element={<Dashboard />} />{" "} */}
        <Route path="dashboard-layout/*" element={<DashboardLayout />} />{" "}
        <Route path="buy-products" element={<BuyProducts />} />{" "}
        <Route path="business-details" element={<BusinessDetail />} />{" "}
        <Route path="finances" element={<FInances />} />{" "}
        <Route path="company-details" element={<CompanyDetail />} />{" "}
        <Route path="company-location" element={<CompanyLocation />} />{" "}
        <Route path="submit-page" element={<SubmitPage />} />{" "}
        <Route path="overview-dashboard" element={<OverviewDashboard />} />{" "}
        <Route path="sell-products" element={<SellProducts />} />{" "}
        <Route path="product-requests" element={<ProductRequests />} />{" "}
        <Route path="messages" element={<Messages />} />{" "}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
