import React from "react";
import { Link } from "react-router-dom";

export const Payment = () => {
  return (
    <>
      <div className="d-flex offset-md-1 bread-crumbs mt4">
        <Link to={"/"} className="back">
          Back
        </Link>
        <Link to={"/cart-list"}>Cart List /</Link>
        <Link to={"/checkout"}>Check out /</Link>
        <p>Payment /</p>
        <Link to={"/checkout"}>Confirmation /</Link>
      </div>
      <div style={{ height: "150px" }} />
    </>
  );
};
