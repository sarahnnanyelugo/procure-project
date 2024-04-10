import React, { useState } from "react";

import Icon2 from "../../assets/images/add.svg";
import Icon3 from "../../assets/images/minus.svg";
import Icon4 from "../../assets/images/trash2.svg";

export const PurchasedItems = (props) => {
  return (
    <>
      <div className="d-flex cart-items">
        <div style={{ flexGrow: 1 }} className="d-flex">
          <input type="checkbox" />{" "}
          <img src={props.Icon} width="55px" height="55px" />
          <div>
            {" "}
            <h6>{props.itemName}</h6>
            <p>{props.itemInfo}</p>
          </div>
        </div>{" "}
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={Icon2} width="24px" height="24px" onClick={increment} />
          <p style={{ color: "#000" }}>₦{count}, 000</p>
          <img src={Icon3} width="24px" height="24px" onClick={decrement} />
        </div>
        <div style={{ flexGrow: 1 }} className="d-flex">
          <h6>₦{count}, 000</h6>
          <img src={Icon4} width="22px" height="22px" />
        </div>
      </div>
    </>
  );
};
