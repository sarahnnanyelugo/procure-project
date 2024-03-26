import React, { useState, useEffect } from "react";
import "./order-table.scss";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const OrderTable = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="transactions-table-container flexy ">
        <div className="table-title flexy flexyM col-md-6">
          <div className="">
            <p>
              {/* ORDER ID:<span>{data.orderID}</span> */}
              ORDER ID:<span>{props.data.headers.orderID}</span>
            </p>

            <br />
            <Link>View order details</Link>
          </div>
          <div>
            {" "}
            <button className="order-status-btn">Completed</button>
          </div>
        </div>
        <div className="col-md-6">
          <Row>
            <Col>
              <h3>TOTAL</h3>
            </Col>
            <Col>
              {" "}
              <h3>SHIP TO:</h3>
            </Col>
            <Col>
              <h3>ORDER PLACED:</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <h2>₦{data.orderAmount}</h2> */}
              <h2>₦{props.data.headers.orderAmount}</h2>
            </Col>
            <Col>
              {/* <Link>{data.shippedTo}</Link> */}
              <Link>{props.data.headers.shippedTo}</Link>
            </Col>
            <Col>
              {/* <p>{data.date}</p> */}
              <p>{props.data.headers.date}</p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="flexy displayed-orders">
        <div className="col-md-8 flexy">
          <div className="col-md-3  caru-body">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {data.images.map((img, index) => (
                <Carousel.Item>
                  <img src={img} width="100%" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-9 order-details">
            <p>{data.orderdDetail}</p>
            <small>Sold by : {props.data.distributor}</small>
            <div className="flexy flexyM mt5">
              <p className="price">
                ₦ {data.unitPrice} x <span>{props.data.qty}pcs</span>
              </p>
              <div>
                {" "}
                <button className="buy-again-btn">Buy it again</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 offset-md-2 dashboard-actions">
          <button>Track order</button>
          <button>Leave review</button>
          <button>Get help</button>
        </div>
      </div>
    </>
  );
};
export default OrderTable;
