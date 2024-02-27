import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { firstSearch } from "../../TestData";
import FilterOffcanvas from "./FilterOffcanvas";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
import Results from "./Results";
import Icon from "../../assets/images/sort.svg";

import "./searched-results.scss";
import { ResultDetails } from "./ResultDetails";
export default function SearchedResults(data) {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [isListView, setIsListView] = useState(true);
  const toggleView = () => {
    setIsListView((prevState) => !prevState); // Toggle the view mode
  };
  const [state, setState] = useState({
    query: "",
    list: firstSearch,
  });
  // const [view, setView] = useState(false);
  // const toggleHandler = (e) => {
  //   e.preventDefault();
  //   setView(true);
  // };
  // const toggleHandler1 = (e) => {
  //   e.preventDefault();
  //   setView(false);
  // };
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

            <button className="filter-btns2" style={{ marginLeft: "10px" }}>
              Sales
            </button>
            <button className="filter-btns2" style={{ marginLeft: "10px" }}>
              Best Sellers
            </button>
            <div className="flexy offset-md-6">
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
              <button className="filter-btns">
                <img src={Icon} height="20px" width="17px" />
                Sort
              </button>
            </div>
          </div>
          <div className="flexy">
            {/* <div className="col-md-10">
              {" "}
              {!view ? <ListView /> : <GridView />}
            </div> */}
            <div
              id="content"
              className={isListView ? "list-view" : "grid-view"}
            >
              {/* <ResultDetails /> */}
              {items.map((item, index) => (
                <div
                  key={index}
                  className={isListView ? "list-item" : "grid-item"}
                >
                  {item}
                </div>
              ))}
            </div>
            <button onClick={toggleView}>Toggle View</button>
            <div className="col-md-2 mt3" style={{ paddingLeft: "10px" }}>
              <h6>Top Suppliers</h6>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
}
