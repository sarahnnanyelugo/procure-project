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
            <center>
              <h6>{data.dealPrice}</h6>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreDeals;
