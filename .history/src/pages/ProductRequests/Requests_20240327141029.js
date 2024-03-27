import React from "react";

export const Requests = (props) => {
  return (
    <div className="flexy flexyM">
      <div className="col-md-2">
        <img src={props.productImg} />
      </div>{" "}
      <div className="col-md-2">
        <img src={props.productImg} />
      </div>
    </div>
  );
};
