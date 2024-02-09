import React from "react";

export const Shoes = ({ data }) => {
  return (
    <div className="arrival-div">
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2">
        <div className="col-md-6 arrivals1">
          <img src={data.Img1} width="100%" />
        </div>
        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2">
          <div className="col">
            {" "}
            <img src={data.Img1} width="100%" />
          </div>
          <div className="col">
            {" "}
            <img src={data.Img3} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};
