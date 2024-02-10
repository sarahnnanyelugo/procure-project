import React from "react";

export const Shoes = ({ data }) => {
  return (
    <div className="arrivals-div ">
      <div className="flexy flexyM">
        <div className="" style={{ flexGrow: 1 }}>
          <h2> Shoes</h2>
          <p>{data.numAdded}+ added today</p>
        </div>
        <Link>View all</Link>
      </div>
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2">
        <div className="col">
          <img src={data.Img1} width="109%" />
        </div>
        <div className="col ">
          {" "}
          <img src={data.Img2} width="92%" className="ml2" />{" "}
          <img src={data.Img3} width="92%" className="mt1 ml2" />
        </div>
      </div>
    </div>
  );
};
