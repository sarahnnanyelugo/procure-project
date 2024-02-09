import React from "react";

export const Clothing = ({ data }) => {
  return (
    <div className="col">
      <div className="flexy ">
        <div className="col-md-6">
          <img src={data.Img1} width="100%" />
        </div>
        <div className="col-md-6">
          <div className="">
            {" "}
            <img src={data.Img2} width="100%" />
          </div>
          <div className="">
            {" "}
            <img src={data.Img3} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};
