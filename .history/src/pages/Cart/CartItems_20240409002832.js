import React from "react";
import Icon from "../../assets/images/stalls-icon.png";
import Icon2 from "../../assets/images/add.svg";
import Icon3 from "../../assets/images/minus.svg";
import Icon4 from "../../assets/images/trash2.svg";

export const CartItems = () => {
  return (
    <>
      <div className="d-flex cart-items">
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={Icon} width="24px" height="24px" />
          <h6>Supercute Waterproof Mochila…</h6>
          <p>Teddy Pink</p>
        </div>{" "}
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={Icon2} width="24px" height="24px" />
          <p>30</p>
          <img src={Icon3} width="24px" height="24px" />
        </div>
        <div style={{ flexGrow: 1 }} className="d-flex">
          <h6>₦45, 000</h6>
          <img src={Icon4} width="24px" height="24px" />
        </div>
      </div>
    </>
  );
};
