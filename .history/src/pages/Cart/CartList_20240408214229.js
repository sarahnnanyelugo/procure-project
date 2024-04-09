import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./cart.scss";
export const CartList = () => {
  return (
    <>
      <Navbar colo="#000" />
      <div className="col-md-10 offset-md-1 mt4 cart-list-div">
        <div className="d-flex">
          <h3 style={{ flexGrow: 1 }}>Shopping Cart</h3>
          <input type="search" placeholder="search cart" className="col-md-3" />
        </div>
        <hr />
        <div className="d-md-flex ">
          <div className="col-md-8 pr no-pad mt3">
            <h6>Cart list</h6>
            <div className="cart-list-container"></div>
          </div>
          <div className="col-md-4 pl no-pad mt4">
            <h6>Order Summary</h6>
            <div className="cart-list-container"></div>
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
