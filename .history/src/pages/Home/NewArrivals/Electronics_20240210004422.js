import React from "react";
import { Link } from "react-router-dom";

export const Electronics = ({ data }) => {
  return (
    // <div className="col">
    <div className=" arrivals-div">
      <div className="flexy flexyM">
        <div className="" style={{ flexGrow: 1 }}>
          <h2> Clothings</h2>
          <p>{data.numAdded}+ added today</p>
        </div>
        <Link>View all</Link>
      </div>
      <div className="col-md-12 arrivals4">
        {" "}
        <img src={data.Img1} width="100%" />
      </div>
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2 mt1">
        <div className="col">
          {" "}
          <img src={data.Img1} width="100%" />
        </div>
        <div className="col">
          {" "}
          <img src={data.Img1} width="100%" />
        </div>
      </div>
    </div>
    // </div>
  );
};
