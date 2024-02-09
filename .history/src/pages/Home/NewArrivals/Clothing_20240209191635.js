import React from "react";

export const Clothing = ({ data }) => {
  return (
    <div className="col arrivals-div">
      <div className="flexy  col-md-12">
        <div className="col-md-6">
          <img src={data.Img1} width="100%" />
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
