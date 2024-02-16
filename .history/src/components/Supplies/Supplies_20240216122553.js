import React from "react";
import "./supplies.scss";
export const Supplies = ({ data }) => {
  return (
    <>
      <div className="col">
        {" "}
        <div className="supplies-div col-md-12">
          <center>
            <img src={data.supply} />
            <h6>{data.supplyName}</h6>
          </center>
        </div>
      </div>
    </>
  );
};
