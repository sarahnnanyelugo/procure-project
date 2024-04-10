import React, { useState } from "react";

import Icon2 from "../../assets/images/add.svg";
import Icon3 from "../../assets/images/minus.svg";
import Icon4 from "../../assets/images/trash2.svg";

export const PurchasedItems = (props) => {
  return (
    <>
      <div className="d-flex cart-items">
        <h6>X {props.itemQty}</h6>
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={props.Icon} width="55px" height="55px" />
          <div>
            {" "}
            <h6>{props.itemName}</h6>
            <p>{props.itemInfo}</p>
          </div>
        </div>{" "}
        <div>
          <h6>₦{props.amount}, 000</h6>
        </div>
      </div>
    </>
  );
};
