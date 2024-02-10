import React from "react";

export const Tools = ({ data }) => {
  return (
    // <div className="col">
    <div className="arrivals-div">
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-4">
        <div className="col">
          {" "}
          <img src={data.Img1} width="100%" />
        </div>
        <div className="col">
          {" "}
          <img src={data.Img2} width="100%" />
        </div>
      </div>
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-4 mt1">
        <div className="col">
          {" "}
          <img src={data.Img3} width="100%" />
        </div>
        <div className="col">
          {" "}
          <img src={data.Img4} width="100%" />
        </div>
      </div>
    </div>
    // </div>
  );
};
