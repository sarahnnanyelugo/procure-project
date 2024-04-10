import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./cart.scss";
import Accordion from "react-bootstrap/Accordion";
import Icon from "../../assets/images/stalls-icon.png";
import { CartItems } from "./CartItems";
import Icon1 from "../../assets/images/stalls-icon.png";
import Icon2 from "../../assets/images/prd-icon.png";
import Icon3 from "../../assets/images/prd-icon2.png";
import Icon4 from "../../assets/images/prd-icon3.png";

import { Link } from "react-router-dom";
import { OrderSummary } from "./OrderSummary";
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
          <div className="col-md-8 pr no-pad mt4">
            <h6>Cart list</h6>
            <div className="cart-list-container">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="d-flex">
                    <div style={{ flexGrow: 1 }} className="d-flex">
                      <input type="checkbox" /> <img src={Icon} />
                      <h5>Hastletop Stationaries</h5>
                    </div>
                    <h5>₦ 135,500</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <CartItems
                      itemName="Supercute Waterproof Mochila…"
                      itemInfo="Teddy Pink"
                      Icon={Icon2}
                    />
                    <hr />
                    <CartItems
                      itemName="Back To School Government Ten…"
                      itemInfo="Teddy Pink"
                      Icon={Icon3}
                    />
                    <hr />{" "}
                    <CartItems
                      itemName="Back To School Government Ten…"
                      itemInfo="Teddy Pink"
                      Icon={Icon4}
                    />
                    <hr />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>{" "}
            <div className="cart-list-container mt3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="d-flex">
                    <div style={{ flexGrow: 1 }} className="d-flex">
                      <input type="checkbox" /> <img src={Icon} />
                      <h5>Stalls Stationaries</h5>
                    </div>
                    <h5>₦5,000</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <CartItems
                      itemName="Backpack accessories"
                      itemInfo="………"
                      Icon={Icon2}
                    />
                    <hr />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-md-4 pl no-pad mt4">
            <h6>Order Summary</h6>
            <OrderSummary />
          </div>
        </div>
      </div>
      <div className="selected-suppliers d-flex">
        <div className="col-md-3 offset-md-2">
          <h6>2 Suppliers selected</h6>
          <p>
            <span>
              {" "}
              <Link>Save for later</Link>
            </span>
            <span>
              {" "}
              <Link>Cancel order</Link>
            </span>
          </p>

          {""}
        </div>
        <div className="offset-md-3">
          <p>Order total</p>
          <h6>₦140,000</h6>
        </div>
        <Link to={"/checkout"}>
          {" "}
          <button className="app-btn">Checkout from 2 supplies</button>
        </Link>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
