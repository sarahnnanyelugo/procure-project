import React from "react";
import { Card } from "react-bootstrap";

export const GridView = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row" }}
      className=" main-holder "
    >
      <div className=" main-holder ">
        <div className="products-component flexy">
          <div className="col-md-4 com1"></div>
          <div className="col-md-6 com2"></div>
          <div className="col-md-2 com3"></div>
        </div>{" "}
        <div className="products-component flexy">
          <div className="col-md-4 com1"></div>
          <div className="col-md-6 com2"></div>
          <div className="col-md-2 com3"></div>
        </div>{" "}
        <div className="products-component flexy">
          <div className="col-md-4 com1"></div>
          <div className="col-md-6 com2"></div>
          <div className="col-md-2 com3"></div>
        </div>{" "}
        <div className="products-component flexy">
          <div className="col-md-4 com1"></div>
          <div className="col-md-6 com2"></div>
          <div className="col-md-2 com3"></div>
        </div>{" "}
        <div className="products-component flexy">
          <div className="col-md-4 com1"></div>
          <div className="col-md-6 com2"></div>
          <div className="col-md-2 com3"></div>
        </div>
      </div>
    </div>
  );
};
