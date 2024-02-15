import React from "react";

export const Category = (data) => {
  return (
    <>
      <div className="col">
        <div className="category-component">
          <img src={data.MainImg} width="100%" />
        </div>
      </div>
    </>
  );
};
