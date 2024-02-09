import React from "react";

export const Shoes = ({ data }) => {
  return (
    <div className="col">
      <div className="flexy arrivals-div">
        <div className="col-md-6 arrivals1">
          <img src={data.Img1} width="100%" />
        </div>
        <div className="col-md-6">
          <div className="arrivals2">
            {" "}
            <img src={data.Img1} width="100%" />
          </div>
          <div className="arrivals3">
            {" "}
            <img src={data.Img3} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};
