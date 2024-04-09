import React from "react";
import Icon from "../../assets/images/stalls-icon.png";
import Icon from "../../assets/images/stalls-icon.png";
import Icon from "../../assets/images/stalls-icon.png";

export const CartItems = () => {
  return (
    <>
      <div className="d-flex">
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={Icon} />
          <p>Hastletop Stationaries</p>
        </div>{" "}
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={Icon} />
          <p>Hastletop Stationaries</p>
        </div>{" "}
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={Icon} />
          <p>Hastletop Stationaries</p>
        </div>
        <h5>₦ 135,500</h5>
      </div>
    </>
  );
};
