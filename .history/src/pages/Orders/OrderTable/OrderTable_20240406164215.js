import React, { useState, useEffect } from "react";
import "./order-table.scss";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const OrderTable = (props) => {
  const [indx, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="flexy displayed-orders">
        <div className="col-md-8">
          {" "}
          {props.data.data.map((data, index) => (
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-3  caru-body mt3">
                <Carousel activeIndex={indx} onSelect={handleSelect}>
                  {data.images.map((pic, index2) => (
                    <Carousel.Item key={index2 + "_"}>
                      <img src={pic} width="100%" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="col-md-9 order-details mt3">
                <p>{data.orderdDetail}</p>
                <small>Sold by : {data.distributor}</small>
                <div className="flexy flexyM mt5">
                  <p className="price">
                    ₦ {data.unitPrice} x <span>{data.qty}pcs</span>
                  </p>
                  <div>
                    {" "}
                    <button className="buy-again-btn">Buy it again</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-3 offset-md-2 dashboard-actions mt3">
          <Link to={"../track-order"}>
            {" "}
            <button>Track order</button>
          </Link>
          <Link to={"../review-order"}>
            {" "}
            <button>Leave review</button>
          </Link>
          <button>Get help</button>
        </div>
      </div>
    </>
  );
};
export default OrderTable;
