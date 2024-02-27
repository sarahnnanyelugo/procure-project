import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { firstSearch } from "../../TestData";
import FilterOffcanvas from "./FilterOffcanvas";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import Results from "./Results";
import "./searched-results.scss";
export default function SearchedResults(data) {
  const [state, setState] = useState({
    query: "",
    list: firstSearch,
  });
  const [view, setView] = useState(false);
  const toggleHandler = (e) => {
    e.preventDefault();
    setView(true);
  };
  const toggleHandler1 = (e) => {
    e.preventDefault();
    setView(false);
  };
  return (
    <>
      <div className="search-nav">
        <Navbar colo="#000" />
      </div>
      <div className="col-md-10 offset-md-1 mt">
        <h2>Result for {data.result}</h2>
        <div className="holder dn">
          {state.list.map((data, index) => (
            <Results data={data} />
          ))}
        </div>{" "}
        <div className="holder2">
          {state.list.map((data, index) => (
            <Results data={data} />
          ))}
        </div>
        <hr />
        <div className="mt">
          <div className="flexy">
            <FilterOffcanvas />
            <button className="filter-btns">Sales</button>
            <button className="filter-btns">Best Sellers</button>
            <div className="flexy ">
              <button
                size="100%"
                style={{ color: "orange", margin: "0 10px 10px 10px" }}
                onClick={toggleHandler1}
              >
                List
              </button>
              <button
                size="100%"
                style={{ color: "orange", margin: "0 10px 10px 10px" }}
                onClick={toggleHandler}
              >
                Grid
              </button>
            </div>
          </div>
          <div className="flexy">
            <div className="col-md-10">
              {" "}
              {!view ? <ListView /> : <GridView />}
            </div>
            <div className="col-md-2" style={{ paddingLeft: "10px" }}>
              <h6>Top Suppliers</h6>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
}
