import React, { useState } from "react";
export const Favourites = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="flexy">
        <h3 style={{ flexGrow: 1 }}>Favourites</h3>
      </div>
      <div className="transaction-page">
        <h2>My Orders</h2>
        <hr />
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            All order
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Pending
          </button>
          <button
            className={`tab ${checkActive(3, "active2")}`}
            onClick={() => handleClick(3)}
          >
            Completed
          </button>{" "}
          <button
            className={`tab ${checkActive(4, "active2")}`}
            onClick={() => handleClick(4)}
          >
            Canceled
          </button>{" "}
        </div>

        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>1</div>
          <div className={`panel ${checkActive(2, "active2")}`}>2</div>
        </div>
      </div>
    </>
  );
};
