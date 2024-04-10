import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../assets/images/check.png";

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
          <div className="cart-list-container">
            <img src={Icon} />
            <div className="">
              <h6>
                Thank you <br />
                Your order has been received
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 pl no-pad mt4">
          <h5>Check Out</h5>
          <div className="cart-list-container"></div>
        </div>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
