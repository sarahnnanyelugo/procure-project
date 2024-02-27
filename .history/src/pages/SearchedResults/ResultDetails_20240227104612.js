import React from "react";
import { Card } from "react-bootstrap";

export const ResultDetails = ({ data }) => {
  return (
    <>
      <div className=" main-holder  row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
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
      </div>{" "}
    </>
  );
};
