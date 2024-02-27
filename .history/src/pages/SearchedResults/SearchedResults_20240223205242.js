import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { firstSearch } from "../../TestData";
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
        <div className="mt">
          <div style={{ marginTop: "5%" }}>
            <button
              size="100%"
              style={{ color: "orange" }}
              onClick={toggleHandler1}
            >
              List
            </button>
            <button
              size="100%"
              style={{ color: "orange" }}
              onClick={toggleHandler}
            >
              Grid
            </button>
          </div>
          <div className="col-md-10">
            {" "}
            {!view ? <ListView /> : <GridView />}
          </div>
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
}
