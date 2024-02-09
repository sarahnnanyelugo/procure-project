import React from "react";

export const Clothing = ({ data }) => {
  return (
    <div className="col">
      <div className="flexy arrivals-div col-md-12">
        <div className="col-md-6">
          <img src={data.Img1} width="" />
        </div>
        <div className="col-md-6">
          {" "}
          <img src={data.Img2} width="100%" />{" "}
          <img src={data.Img3} width="100%" />
        </div>
      </div>
    </div>
  );
};
