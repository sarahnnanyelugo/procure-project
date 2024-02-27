import React from "react";
import { Link } from "react-router-dom";
import "./supplies.scss";
export const Supplies = ({ data }) => {
  
  return (
    <>
      {/* <div className="col"> */}{" "}
      <Link
        to={"/searched-results/" + data.id}
        className="supplies-div "
        style={{ color: "#000", textDecoration: "none" }}
      >
        <center>
          <img src={data.supply} />
          <h6>{data.supplyName}</h6>
        </center>
      </Link>
      {/* </div> */}
    </>
  );
};
