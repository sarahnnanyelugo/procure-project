import React from "react";

export const Checkout = () => {
  return (
    <>
      <div className="d-flex">
        <Link to={"/cart-list"}>Back</Link>
        <Link to={"/cart-list"}>Back</Link>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
