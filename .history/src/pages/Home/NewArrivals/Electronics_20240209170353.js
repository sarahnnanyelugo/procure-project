import React from "react";

export const SchoolSupplies = ({ data }) => {
  return (
    <div className="col">
      <div className=" arrivals-div">
        <div className="col-md-12 arrivals4">
          {" "}
          <img src={data.Img1} />
        </div>
        <div className="col-md-12 flexy">
          <div className="arrivals2 col-md-6">
            {" "}
            <img src={data.Img1} />
          </div>
          <div className="arrivals3 col-md-6">
            {" "}
            <img src={data.Img1} />
          </div>
        </div>
      </div>
    </div>
  );
};
