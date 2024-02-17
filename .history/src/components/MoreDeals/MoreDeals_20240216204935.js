import React from "react";
import "./more-deals.scss";
function MoreDeals({ data }) {
  return (
    <>
      <div className="col">
        <div className="more-deals-div">
          <img src={data.productImg} width="100%" />
          <div className="deal-amount">
            <p>Starting at</p>

            <h6>{data.dealPrice}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreDeals;
