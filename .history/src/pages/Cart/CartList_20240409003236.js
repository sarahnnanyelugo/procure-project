import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./cart.scss";
import Accordion from "react-bootstrap/Accordion";
import Icon from "../../assets/images/stalls-icon.png";
import { CartItems } from "./CartItems";

export const CartList = () => {
  const [count, setCount] = useState(0);
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
          <div className="col-md-8 pr no-pad mt4">
            <h6>Cart list</h6>
            <div className="cart-list-container">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="d-flex">
                    <div style={{ flexGrow: 1 }} className="d-flex">
                      <img src={Icon} />
                      <h5>Hastletop Stationaries</h5>
                    </div>
                    <h5>₦ 135,500</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <CartItems />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
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
