import React from "react";

export const Clothing = ({ data }) => {
  return (
    <div className="flexy arrivals-div">
      <div className="col-md-6 arrivals1">
        <img src={data.Img1} />
      </div>
      <div className="col-md-6">
        <div className="arrivals2">
          {" "}
          <img src={data.Img1} />
        </div>
        <div className="arrivals3">
          {" "}
          <img src={data.Img3} />
        </div>
      </div>
    </div>
  );
};
