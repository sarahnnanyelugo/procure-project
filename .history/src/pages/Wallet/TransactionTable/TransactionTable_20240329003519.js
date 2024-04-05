import React, { useState, useEffect } from "react";
import "./transaction-table.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const TransactionTable = ({ data }) => {
  const [showInvoice, setShowInvoice] = useState(null);
  const displayInvoice = (item) => {
    setShowInvoice(item);
  };
  useEffect(() => {
    if (showInvoice !== null) {
      localStorage.setItem("currentInvoice", JSON.stringify(showInvoice));
    } else {
      localStorage.setItem("currentInvoice", undefined);
    }
  }, [showInvoice]);
  return (
    <>
      <div className="transactions-table-container">
        <div className="table-title">
          <h5>{data.tableTitle}</h5>

          <Link to="/customer-support">
            <small style={{ color: "#fff", fontSize: "12px" }}></small>
          </Link>
        </div>
        <table className="col-md-12 col-12">
          <thead>
            {/* <tr>
              {data.data.headers.map((item) => (
                <th>{item}</th>
              ))}
            </tr> */}
          </thead>
          <tbody>
            {data.data.map((item, index) => (
              <tr>
                <td>{item.name.productType}</td>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TransactionTable;
