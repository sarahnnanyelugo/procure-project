import React from "react";

export const Requests = ({ data }) => {
  return (
    <div className="flexy flexyM requests-component">
      <div className="col-md-1">
        <img src={data.productImg} width="100%" />
      </div>{" "}
      <div className="col-md-7 ">
        <p>{data.productDescription}</p>
      </div>
      <div className="col-md-2 offset-md-1">
        <button>{data.productStatus}</button>
        <br />
        <small>{data.date}</small>
        <br />
        <small style={{ float: "right" }}>{data.time}</small>
      </div>
    </div>
  );
};
