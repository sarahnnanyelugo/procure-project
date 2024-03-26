import React, { useState, useEffect } from "react";
import "./order-table.scss";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
// import PrintComponent from "../InvoiceModal/InvoiceModal";
// import { allTransactions } from "../../../TestData";

const OrderTable = (props) => {
  // const [showInvoice, setShowInvoice] = useState(null);
  // const displayInvoice = (item) => {
  //   setShowInvoice(item);
  // };
  // useEffect(() => {
  //   if (showInvoice !== null) {
  //     localStorage.setItem("currentInvoice", JSON.stringify(showInvoice));
  //   } else {
  //     localStorage.setItem("currentInvoice", undefined);
  //   }
  // }, [showInvoice]);
  return (
    <>
      <div className="transactions-table-container">
        <div className="table-title flexy flexyM col-md-6">
          <div className="">
            <props>ORDER ID:{props.orderID}</props>
            <Link>View order details</Link>
          </div>
          <button className="order-status-btn">{props.orderStatus}</button>
        </div>
        <div className="col-md-6">
          <Row>
            <Col>
              <h3>TOTAL</h3>
              <h3>SHIP TO:</h3>
              <h3>ORDER PLACED:</h3>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default OrderTable;
