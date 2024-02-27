import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { firstSearch } from "../../TestData";
import Results from "./Results";
import "./searched-results.scss";
export default function SearchedResults(data) {
  const [toggleView, setToggleView] = useState(true);
  {
    toggleView ? "list" : "grid";
  }
  {
    toggleView ? (
      <i className="bi bi-list"></i>
    ) : (
      <i className="bi bi-grid"></i>
    );
  }
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
          <div id="products-component " >
            <div className="col-md-4 com1"></div>
            <div className="col-md-6 com2"></div>
            <div className="col-md-2 com3"></div>
          </div>{" "}
          <div id="products-component " >
            <div className="col-md-4 com1"></div>
            <div className="col-md-6 com2"></div>
            <div className="col-md-2 com3"></div>
          </div>{" "}
          <div id="products-component " >
            <div className="col-md-4 com1"></div>
            <div className="col-md-6 com2"></div>
            <div className="col-md-2 com3"></div>
          </div>
        </div>
      </div>
<table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Occupation</th>
        <th scope="col">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Andrew</th>
        <td>35</td>
        <td>Doctor</td>
        <td>Australia</td>
      </tr>
      <tr>
        <th scope="row">Liam</th>
        <td>42</td>
        <td>Cricketer</td>
        <td>England</td>
      </tr>
      <tr>
        <th scope="row">Seema</th>
        <td>32</td>
        <td>HouseWife</td>
        <td>India</td>
      </tr>
    </tbody>
  </table>
      <div style={{ height: "300px" }} />
    </>
  );
}
