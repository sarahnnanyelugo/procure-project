import React, { useState } from "react";

import Icon2 from "../../assets/images/add.svg";
import Icon3 from "../../assets/images/minus.svg";
import Icon4 from "../../assets/images/trash2.svg";

export const PurchasedItems = (props) => {
  const [count, setCount] = useState(0);
  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
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
