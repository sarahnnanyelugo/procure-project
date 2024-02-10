import React from "react";

export const Clothing = ({ data }) => {
  return (
    <div className="arrivals-div ">
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2">
        <div className="col">
          <img src={data.Img1} width="105%" />
        </div>
        <div className="col ">
          {" "}
          <img src={data.Img2} width="85%" />{" "}
          <img src={data.Img3} width="85%" className="mt1 ml" />
        </div>
      </div>
    </div>
  );
};
