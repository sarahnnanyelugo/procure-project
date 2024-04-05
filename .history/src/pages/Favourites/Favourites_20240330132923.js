import React, { useState } from "react";
import "./favourites.scss";
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
      <div className="favourites-page">
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>1</div>
          <div className={`panel ${checkActive(2, "active2")}`}>2</div>
        </div>
      </div>
    </>
  );
};
