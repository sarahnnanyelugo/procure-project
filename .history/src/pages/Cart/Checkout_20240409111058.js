import React from "react";

export const Checkout = () => {
  return (
    <>
      <div className="d-flex">
        <Link to={"/"}>Back</Link>
        <Link to={"/cart-list"}>Cart List</Link>
        <Link to={"/checkout"}>Check out</Link>
        <Link to={"/checkout"}>Payment</Link>
        <Link to={"/checkout"}>Confirmation</Link>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
