import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { firstSearch } from "../../TestData";
import FilterOffcanvas from "./FilterOffcanvas";
import { GetProductsList } from "../../providers";
import Icon from "../../assets/images/sort.svg";
import { useParams } from "react-router-dom";
import "./searched-results.scss";
import { ResultDetails } from "./ResultDetails";
import { productCategories, products } from "../../TestData";
import Results from "./Results";
import Icon1 from "../../assets/images/bts1.png";

export default function SearchedResults(data) {
  const { cat_id } = useParams();
  const [id, setId] = useState(0);
  useEffect(() => {
    setId(cat_id);
    console.log(cat_id);
  }, [cat_id]);

  const [isListView, setIsListView] = useState(true);
  const switchToListView = () => {
    setIsListView(true);
  };
  const switchToGridView = () => {
    setIsListView(false);
  };
  const [state, setState] = useState({
    query: "",
    list: firstSearch,
    listCat: [],

    listProducts: [],
  });
  useEffect(() => {
    const pc = productCategories.filter(
      (category) => category.parent_id === parseInt(cat_id)
    );
    const products = GetProductsList({ category_id: cat_id });
    setState({ ...state, listCat: pc, listProducts: products });
  }, [cat_id]);
  return (
    <>
      <div className="search-nav">
        <Navbar colo="#000" />
      </div>
      <div className="col-md-10 offset-md-1 mt">
        <h2>Result for {data.result}</h2>
        <div className="holder dn">
          {state.listCat.map((data, index) => (
            <Results data={data} key={index} />
          ))}
        </div>{" "}
        <div className="holder2">
          {state.listCat.map((data, index) => (
            <Results data={data} key={index} />
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
                onClick={switchToListView}
              >
                List
              </button>
              <button
                size="100%"
                style={{
                  color: "orange",
                  margin: "0 10px 10px 10px",
                  border: "none",
                }}
                onClick={switchToGridView}
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
            <div className="col-md-10">
              {" "}
              <div
                id="content"
                className={isListView ? "list-view" : "grid-view"}
              >
                {state.listProducts.map((item, index) => (
                  <div
                    key={index}
                    className={isListView ? "list-item" : "grid-item"}
                  >
                    <ResultDetails data={item} key={index} />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="col-md-2 mt3 suppliers-list"
              style={{ paddingLeft: "10px" }}
            >
              <h6>Top Suppliers</h6>
              <ul className="list-unstyled mt3">
                <li>
                  <img src={Icon1} width="67px" />
                  Top Stores
                </li>
                <li>
                  <img src={Icon1} width="67px" />
                  Ideal Stores
                </li>{" "}
                <li>
                  <img src={Icon1} width="67px" />
                  Stalls Stationeries
                </li>{" "}
                <li>
                  <img src={Icon1} width="67px" />
                  Hastletop
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
}
