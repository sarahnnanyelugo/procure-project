import React from "react";
import "./product-areas.scss";
import Icon1 from "../../assets/images/construction.svg";

export const ProductAreas = () => {
  return (
    <div className=" areas-div">
      <div className="areas area1">
        <center>
          {" "}
          <img src={Icon1} />
          <p>Construction & Real Estate</p>
        </center>
      </div>{" "}
    </div>
  );
};
