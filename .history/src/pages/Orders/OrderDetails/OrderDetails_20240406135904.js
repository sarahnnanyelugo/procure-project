import React from "react";

export const OrderDetails = () => {
  return (
    <>
      <div
        className="d-flex mtt"
        style={{ height: "1000px", background: "red" }}
      >
        <p style={{ flexGrow: 1, color: "red" }}>Order / Order Details</p>
        <button>Download Invoice</button>
      </div>
      {/* <div style={{ height: "300px" }} /> */}
    </>
  );
};
