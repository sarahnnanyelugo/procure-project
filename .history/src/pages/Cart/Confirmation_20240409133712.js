import React from "react";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <>
      <div className="d-flex offset-md-1 bread-crumbs mt4">
        <Link to={"/"} className="back">
          Back
        </Link>
        <Link to={"/cart-list"}>Cart List /</Link>
        <p>Check out /</p>
        <Link to={"/checkout"}>Payment /</Link>
        <Link to={"/checkout"}>Confirmation /</Link>
      </div>
    </>
  );
};
