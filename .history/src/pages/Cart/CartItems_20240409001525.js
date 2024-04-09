import React from "react";

export const CartItems = () => {
  return (
    <>
      <div>
        <div style={{ flexGrow: 1 }} className="d-flex">
          <img src={Icon} />
          <h5>Hastletop Stationaries</h5>
        </div>
        <h5>₦ 135,500</h5>
      </div>
    </>
  );
};
