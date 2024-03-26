import React from "react";
import "./product-areas.scss";
import Icon1 from "../../assets/images/construction.svg";

export const ProductAreas = (props) => {
  return (
    <div className=" areas-div">
      <div className="areas ">
        <center>
          {" "}
          <img src={props.Icon} />
          <p>{props.name}</p>
        </center>
      </div>{" "}
    </div>
  );
};
