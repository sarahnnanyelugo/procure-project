import React from "react";

export const Chats = ({ data }) => {
  return (
    <div className="flexy flexyM requests-component">
      <div className="col-md-1">
        <img src={data.productImg} width="100%" />
      </div>{" "}
      <div className="col-md-7 ">
        <p>{data.productDescription}</p>
      </div>
      <div className="col-md-2 offset-md-1">
        <small>{data.date}</small>
      </div>
    </div>
  );
};
