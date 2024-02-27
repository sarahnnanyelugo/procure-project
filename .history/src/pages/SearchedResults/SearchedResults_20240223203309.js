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
        <div className="mt col-md-10 main-holder ">
          <div id="products-component ">
            <div className="col-md-4 com1"></div>
            <div className="col-md-6 com2"></div>
            <div className="col-md-2 com3"></div>
          </div>{" "}
          <div id="products-component ">
            <div className="col-md-4 com1"></div>
            <div className="col-md-6 com2"></div>
            <div className="col-md-2 com3"></div>
          </div>{" "}
          <div id="products-component ">
            <div className="col-md-4 com1"></div>
            <div className="col-md-6 com2"></div>
            <div className="col-md-2 com3"></div>
          </div>{" "}
          <div id="products-component ">
            <div className="col-md-4 com1"></div>
            <div className="col-md-6 com2"></div>
            <div className="col-md-2 com3"></div>
          </div>{" "}
          <div id="products-component ">
            <div className="col-md-4 com1"></div>
            <div className="col-md-6 com2"></div>
            <div className="col-md-2 com3"></div>
          </div>
        </div>
        <div className="mt">
          <div style={{ marginTop: "5%" }}>
            <button size="100%" style={{ color: "orange" }}>
              List
            </button>
            <button size="100%" style={{ color: "orange" }}>
              Grid
            </button>
          </div>
          <ListView />
          <GridView />
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
}
