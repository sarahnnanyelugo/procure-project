import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { firstSearch } from "../../TestData";
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
          <Table />
          <CardView />
          <div style={{ marginTop: "5%" }}>
            <button size="100%" style={{ backgroundColor: "#DCE5EC" }}>
              {<BsListUl />}
            </button>
            <button size="100%" style={{ backgroundColor: "#DCE5EC" }}>
              {<BsCardText />}
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
}
