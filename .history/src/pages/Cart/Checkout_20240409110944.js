import React from "react";

export const Checkout = () => {
  return (
    <>
      <div className="d-flex">
        <Link to={"/"}>Back</Link>
        <Link to={"/cart-list"}>Cart List</Link>
        <Link to={"/cart-list"}>Cart List</Link>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
