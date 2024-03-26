import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Hastletop from "../../assets/images/hastletop.png";

import "./suppliers-store.scss";
const SuppliersStore = () => {
  return (
    <>
      <Navbar colo="#000" />
      <div className="offset-md-1 col-md-10 bredcrmb">
        <div className="flexy flexyM">
          <Link to={"/searched-results/:cat_id"}>Back</Link>{" "}
          <Link to={"/"}>Home</Link>
          <p>Membership</p>
        </div>
        <hr />
      </div>

      <div className="suppliers-store-bg">
        <div className="col-md-6 offset-md-1 flexy">
          <img src={Hastletop} height="119px" width="119px" />
          <div>
            <h1>Hastletop Stationaries</h1>
            <p>School Supplies</p>
            <p>Ships directly from brand (± 3-6 days)</p>
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};

export default SuppliersStore;
