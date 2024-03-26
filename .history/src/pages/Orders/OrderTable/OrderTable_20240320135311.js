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
          <h5>jkcjcjcnincois</h5>
          {/* <a href="/#">View all </a> */}
          <Link to="/customer-support">
            <small style={{ color: "#fff", fontSize: "12px" }}>
              {/* Need help ? */}
            </small>
          </Link>
        </div>
        <table className="col-md-12 col-12">
          <thead>
            <tr>
              {props.data.headers.map((item) => (
                // <th>{item}</th>
                <th>kxcmkmfmkm</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.data.map((item, index) => (
              <tr>
                <td>
                  {/* {item.name.productType} */}
                  gegergerrgg
                </td>
                {/* <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
                <td>{item.date}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {showInvoice !== null && <InvoiceModal displayInvoice={displayInvoice} />} */}
      {/* <PrintComponent /> */}
    </>
  );
};
export default OrderTable;
