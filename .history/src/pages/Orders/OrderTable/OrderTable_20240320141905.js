import React, { useState, useEffect } from "react";
import "./order-table.scss";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
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
        <div className="table-title">
          <div classNAme="flexy flexyM">
            <props>ORDER ID:{props.orderID}</props>
            <Link>View order details</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderTable;
