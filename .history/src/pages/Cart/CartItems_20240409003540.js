import React, { useState } from "react";
import Icon from "../../assets/images/stalls-icon.png";
import Icon2 from "../../assets/images/add.svg";
import Icon3 from "../../assets/images/minus.svg";
import Icon4 from "../../assets/images/trash2.svg";

export const CartItems = () => {
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
          <img src={Icon} width="24px" height="24px" />
          <div>
            {" "}
            <h6>Supercute Waterproof Mochila…</h6>
            <p>Teddy Pink</p>
          </div>
        </div>{" "}
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={Icon2} width="24px" height="24px" onClick={increment} />
          <p style={{ color: "#000" }}>{count}</p>
          <img src={Icon3} width="24px" height="24px" onClick={decrement} />
        </div>
        <div style={{ flexGrow: 1 }} className="d-flex">
          <h6>₦45, 000</h6>
          <img src={Icon4} width="22px" height="22px" />
        </div>
      </div>
    </>
  );
};
