import React, { useState, useEffect } from "react";
import "./order-table.scss";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const OrderTable = ({ data }) => {
  return (
    <>
      <div className="transactions-table-container flexy ">
        <div className="table-title flexy flexyM col-md-6">
          <div className="">
            <props>
              ORDER ID:<span>{data.orderID}</span>
            </props>
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
              <h2>{data.orderAmount}</h2>
            </Col>
            <Col>
              <Link>{data.shippedTo}</Link>
            </Col>
            <Col>
              <p>{data.date}</p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="flexy displayed-orders">
        <div className="col-md-8">
          <div className="col-md-3  caru-body">
            <Carousel activeIndex={index}>
              {data.images.map((img, index) => (
                <Carousel.Item>
                  <img src={img} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-9">
            <p>{data.orderdDetail}</p>
            <small>Sold by : {data.distributor}</small>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};
export default OrderTable;
