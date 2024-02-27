import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";

export const ResultDetails = ({ data }) => {
  return (
    <>
      {" "}
      <div className="col">
        {" "}
        <div className="products-component flexy flexyM">
          <div className="col-md-4 com1 col-4"></div>
          <div className="col-md-6 com2 col-6">
            <p>{data.productName}</p>
            <h1>{data.priceRange}</h1>
            <small>{data.minOrder}</small>
          </div>
          <div className="col-md-2 com3 col-3">
            <button>Add to cart</button>
            <button>Chat now</button>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
