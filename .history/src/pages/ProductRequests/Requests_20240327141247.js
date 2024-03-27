import React from "react";

export const Requests = (props) => {
  return (
    <div className="flexy flexyM requests-component">
      <div className="col-md-2">
        <img src={props.productImg} />
      </div>{" "}
      <div className="col-md-7">
        <p>{props.prodDescription}</p>
      </div>
      <div className="col-md-2 offset-md-1">
        <button>{props.Status}</button>
        <small>{props.date}</small>
        <small>{props.time}</small>
      </div>
    </div>
  );
};
