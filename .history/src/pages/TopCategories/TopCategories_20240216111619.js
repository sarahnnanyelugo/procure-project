import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./top-categories.scss";
export const TopCategories = () => {
  return (
    <>
      {" "}
      <div className="nav-displayer">
        <Navbar colo="#fff" />
      </div>
      <div className="top-categories-div mt5">
        <div className="col-md-10 offset-md-1">
          <h2>Top Categories</h2>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
