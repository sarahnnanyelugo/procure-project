import React from "react";
import { Link } from "react-router-dom";

export const Jewelries = ({ data }) => {
  return (
    // <div className="col">
    <div className="arrivals-div">
      <div className="flexy flexyM">
        <div className="" style={{ flexGrow: 1 }}>
          <h2> Jewelries</h2>
          <p>{data.numAdded}+ added today</p>
        </div>
        <Link>View all</Link>
      </div>
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2">
        <div className="col">
          {" "}
          <img src={data.Img1} width="90%" />
        </div>
        <div className="col">
          {" "}
          <img src={data.Img2} width="90%" />
        </div>
      </div>
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2 mt1">
        <div className="col">
          {" "}
          <img src={data.Img3} width="90%" />
        </div>
        <div className="col">
          {" "}
          <img src={data.Img4} width="90%" />
        </div>
      </div>
    </div>
    // </div>
  );
};
