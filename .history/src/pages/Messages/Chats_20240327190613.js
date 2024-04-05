import React from "react";

export const Chats = ({ data }) => {
  return (
    <div className="flexy flexyM requests-component chats">
      <div className="col-md-1">
        <img src={data.productImg} width="100%" />
      </div>{" "}
      <div className="col-md-10 ">
        <p>
          {data.suppliersName}

          <sup>
            <div>2</div>
          </sup>
        </p>
        <small>{data.message}</small>
      </div>
      <div className=" ">
        <small style={{ float: "right" }}>{data.time}</small>
      </div>
    </div>
  );
};
