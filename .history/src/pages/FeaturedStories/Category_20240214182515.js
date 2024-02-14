import React from "react";

export const Category = ({ data, setChecked }) => {
  const handleSelected = (e) => {
    return setChecked(data.id, e.target.value);
  };
  return (
    <>
      {data.options.map((item, index) => {
        return (
          <div>
            <input
              type="radio"
              id="answer-{item.label}"
              name="answers{index}"
              //   value={index}
              //   onClick={handleSelected}
            />
            <label for="answer-a">
              {item.label}. {item.text}
            </label>
          </div>
        );
      })}
    </>
  );
};
