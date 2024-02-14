import React from "react";

export const Category = ({ data, setChecked }) => {
  const handleSelected = (e) => {
    return setChecked(data.id, e.target.value);
  };
  return <div>Category</div>;
};
