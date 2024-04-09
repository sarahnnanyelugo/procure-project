import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./cart.scss";
import Accordion from "react-bootstrap/Accordion";

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
                  <Accordion.Header>
                    <h5>Hastletop Stationaries</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
