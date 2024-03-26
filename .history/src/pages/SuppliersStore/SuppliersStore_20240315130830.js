import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./suppliers-store.scss";
const SuppliersStore = () => {
  return (
    <>
      <Navbar colo="#000" />
      <div className="offset-md-1 flexy flexyM col-md-10">
        <Link to={"/searched-results/:cat_id"}>Back</Link>{" "}
        <Link to={"/"}>Home</Link>
        <p>Membership</p>
        <hr />
      </div>
      <div className="suppliers-store-bg"></div>
      <div style={{ height: "300px" }} />
    </>
  );
};

export default SuppliersStore;
