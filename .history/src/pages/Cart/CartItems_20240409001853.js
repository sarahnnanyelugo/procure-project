import React from "react";
import Icon from "../../assets/images/stalls-icon.png";
import Icon2 from "../../assets/images/add.svg";
import Icon3 from "../../assets/images/minus.svg";
import Icon4 from "../../assets/images/trash.svg";

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
          <img src={Icon2} />
          <p>Hastletop Stationaries</p>
        </div>
        <h5>₦ 135,500</h5>
      </div>
    </>
  );
};
