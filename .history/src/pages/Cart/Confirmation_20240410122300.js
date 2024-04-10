import React from "react";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <>
      <div className="d-flex offset-md-1 bread-crumbs mt4">
        <Link to={"/"} className="back">
          Back to shopping
        </Link>
        <Link to={"/cart-list"}>Cart List /</Link>
        <Link to={"/checkout"}>Check out /</Link>
        <Link to={"/payment"}>Payment /</Link>
        <p>Confirmation /</p>
      </div>
      <div className="col-md-10 offset-md-1 cart-list-div d-md-flex">
        <div className="col-md-8 pr no-pad mt4">
          <h5>Check Out</h5>
          <div className="cart-list-container"></div>
        </div>
        <div className="col-md-4 pl no-pad mt4"></div>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
