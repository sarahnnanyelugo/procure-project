import React from "react";

export const HairAccessories = ({ data }) => {
  return (
    // <div className="col">
    <div className=" arrivals-div">
      <div className="col-md-6 arrivals1">
        <img src={data.Img1} />
      </div>
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-4">
        <div className="col">
          {" "}
          <img src={data.Img1} />
        </div>
        <div className="col">
          {" "}
          <img src={data.Img3} />
        </div>
      </div>
    </div>
    // </div>
  );
};
