import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes></Routes>
    </>
  );
}

export default App;
