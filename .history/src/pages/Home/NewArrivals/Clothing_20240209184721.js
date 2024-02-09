import React from "react";

export const Clothing = ({ data }) => {
  return (
    <div className="col">
      <div className="flexy arrivals-div">
        <div className="col-md-6">
          <img src={data.Img1} width="100%" />
        </div>
        <div className="col-md-6">
          {" "}
          <img src={data.Img2} width="90%" />{" "}
          <img src={data.Img3} width="90%" />
        </div>
      </div>
    </div>
  );
};
