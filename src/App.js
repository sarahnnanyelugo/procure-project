import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/scrollToTop";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </>
  );
}

export default App;
