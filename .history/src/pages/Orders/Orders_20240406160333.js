import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { dashboardData } from "../../TestData";

import "./orders.scss";
import OrderTable from "./OrderTable/OrderTable";

export const Orders = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [state, setState] = useState({
    query: "",

    list: dashboardData,
  });
  return (
    <>
      <div className="transaction-page">
        <h2>My Orders</h2>
        <hr />
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            All order
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Pending
          </button>
          <button
            className={`tab ${checkActive(3, "active2")}`}
            onClick={() => handleClick(3)}
          >
            Completed
          </button>{" "}
          <button
            className={`tab ${checkActive(4, "active2")}`}
            onClick={() => handleClick(4)}
          >
            Canceled
          </button>{" "}
        </div>

        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="transactions-table-container2 flexy ">
              <div className="flexy flexyM col-md-6">
                <div className="">
                  <p>
                    ORDER ID:{""}
                    <span>{props.data.orderID}</span>
                  </p>

                  <br />
                  <Link to={"../order-details"}>View order details</Link>
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
                    <h2>₦{props.data.orderAmount}</h2>
                  </Col>
                  <Col>
                    <Link>{props.data.shippedTo}</Link>
                  </Col>
                  <Col>
                    <p>{props.data.date}</p>
                  </Col>
                </Row>
              </div>
            </div>
            <OrderTable data={dashboardData} />
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {/* <OrderTable data={accountCredits} tableTitle="Transactions" /> */}
            2
          </div>
          <div className={`panel ${checkActive(3, "active2")}`}>
            {/* <OrderTable data={moneySpent} tableTitle="Transactions" /> */}3
          </div>
          <div className={`panel ${checkActive(4, "active2")}`}>
            {/* <OrderTable data={refund} tableTitle="Transactions" /> */}4
          </div>
        </div>
      </div>
    </>
  );
};
