import React from "react";
import { Badge } from "react-bootstrap";
import Icon from "../../assets/images/badge-icon.png";
import Icofont from "react-icofont";
export const Products = ({ data }) => {
  return (
    <>
      <div className="col" style={{ backgroundImage: `url(${data.img})` }}>
        <div className="deals-div">
          <div className="badge-holder">
            {" "}
            <img src={data.productImg} width="100%" />
            <div className="badge">
              <i class="icofont-heart-alt"></i>{" "}
            </div>
          </div>

          <h6>{data.productName}</h6>

          <small>
            Starting at <span>{data.startingPrice}</span>
            <span className="discount"> {data.discountAmount}</span>
          </small>
          <div className="flexy flexyM">
            <img src={data.star} height="11px" />
            <img src={data.star} height="11px" />
            <img src={data.star} height="11px" />
            <img src={data.star} height="11px" />
            <img src={data.star} height="11px" />
            <small className="rating">{data.rating}</small>
          </div>
          <p>{data.suppliers}</p>
        </div>
      </div>
    </>
  );
};
