import React from "react";
import "./buy-products.scss";
export const BuyProducts = () => {
  return (
    <>
      <div className="top-part flexy">
        {" "}
        <div className="dash-logo">
          {" "}
          <Link to={"/"}>
            <img src={Logo} width="100%" />
          </Link>
        </div>
        <Link to={"/"}>
          <button>Log out</button>
        </Link>
      </div>
    </>
  );
};
