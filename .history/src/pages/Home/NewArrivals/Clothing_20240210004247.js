import React from "react";
import { Link } from "react-router-dom";

export const Clothing = ({ data }) => {
  return (
    <div className="arrivals-div ">
      <div className="flexy flexyM">
        <div className="" style={{ flexGrow: 1 }}>
          <h2> Clothings</h2>
          <p>24,000+ added today</p>
        </div>
        <Link>View all</Link>
      </div>
      <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-2">
        <div className="col">
          <img src={data.Img1} width="100%" />
        </div>
        <div className="col ">
          {" "}
          <img src={data.Img2} width="80%" className="ml2" />{" "}
          <img src={data.Img3} width="80%" className="mt1 ml2" />
        </div>
      </div>
    </div>
  );
};
