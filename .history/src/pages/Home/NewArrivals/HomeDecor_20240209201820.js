import React from "react";

export const HomeDecor = ({ data }) => {
  return (
    <div className="col">
      <div className="arrivals-div">
        <div className="col-md-12 flexy">
          <div className="arrivals2 col-md-6">
            {" "}
            <img src={data.Img1} width="100%" />
          </div>
          <div className="arrivals3 col-md-6">
            {" "}
            <img src={data.Img2} width="100%" />
          </div>
        </div>
        <div className="col-md-12 flexy">
          <div className="arrivals2 col-md-6">
            {" "}
            <img src={data.Img3} width="100%" />
          </div>
          <div className="arrivals3 col-md-6">
            {" "}
            <img src={data.Img4} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};
