import React from "react";
import "./supplies.scss";
export const Supplies = ({ data }) => {
  return (
    <>
      <div className="supplies-div">
        <center>
          <img src={data.supply} />
          <h6>{data.supplyName}</h6>
        </center>
      </div>
    </>
  );
};
