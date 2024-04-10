import React from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <>
      <div className="d-flex offset-md-1 bread-crumbs mt4">
        <Link to={"/"} className="back">
          Back
        </Link>
        <Link to={"/cart-list"}>Cart List /</Link>
        <p>Check out /</p>
        <Link to={"/checkout"}>Payment /</Link>
        <Link to={"/checkout"}>Confirmation /</Link>
      </div>
      <div className="col-md-10 offset-md-1">
        <div className="col-md-8 pr no-pad mt4">
          <h6>Cart list</h6>
          <div className="checkout-container"></div>
        </div>
        <div className="col-md-4 pl no-pad mt4">
          <h6>Order Summary</h6>
          <div className="checkout-container summary-div"></div>
        </div>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
