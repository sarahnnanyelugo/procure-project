import React from "react";

export const Clothing = ({ data }) => {
  return (
    <div className="arrivals-div ">
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-4">
        <div className="col">
          <img src={data.Img1} width="" className="col-md-12" />
        </div>
        <div className="col">
          {" "}
          <img src={data.Img2} width="100%" />{" "}
          <img src={data.Img3} width="100%" />
        </div>
      </div>
    </div>
  );
};
