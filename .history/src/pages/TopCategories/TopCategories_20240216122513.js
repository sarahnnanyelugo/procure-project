import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Supplies } from "../../components/Supplies/Supplies";
import { topCategories } from "../../TestData";
import "./top-categories.scss";
export const TopCategories = () => {
  const [state, setState] = useState({
    query: "",
    list: topCategories,
  });
  return (
    <>
      {" "}
      <div className="nav-displayer">
        <Navbar colo="#fff" />
      </div>
      <div className="top-categories-div mt8">
        <div className="">
          <h2>Top Categories</h2>
          <div className="row row-cols-3 row-cols-lg-7 g-2 g-lg-2">
            {state.list.map((data, index) => (
              <Supplies data={data} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
