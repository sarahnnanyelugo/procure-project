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
          <img src={Icon2} />
          <p>30</p>
          <img src={Icon3} />
        </div>
        <div style={{ flexGrow: 1 }} className="d-flex">
          <h6>₦45, 000</h6>
          <img src={Icon2} />
        </div>
      </div>
    </>
  );
};
