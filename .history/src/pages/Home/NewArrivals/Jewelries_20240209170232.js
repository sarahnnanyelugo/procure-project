import React from "react";

export const Jewelries = ({ data }) => {
  return (
    <div className="col">
      <div className="arrivals-div">
        <div className="col-md-12 flexy">
          <div className="arrivals2 col-md-6">
            {" "}
            <img src={data.Img1} />
          </div>
          <div className="arrivals3 col-md-6">
            {" "}
            <img src={data.Img2} />
          </div>
        </div>
        <div className="col-md-12 flexy">
          <div className="arrivals2 col-md-6">
            {" "}
            <img src={data.Img3} />
          </div>
          <div className="arrivals3 col-md-6">
            {" "}
            <img src={data.Img4} />
          </div>
        </div>
      </div>
    </div>
  );
};
