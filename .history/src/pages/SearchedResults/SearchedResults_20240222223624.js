import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./searched-results.scss";
export default function SearchedResults() {
  return (
    <>
      <div className="search-nav">
        <Navbar colo="#000" />
      </div>
      <div className="col-md-10 offset-md-1 mt">
        <h2>Result for “back to school”</h2>
        <div className="holder dn">
          {state.list.map((data, index) => (
            <Supplies data={data} />
          ))}
        </div>{" "}
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}
