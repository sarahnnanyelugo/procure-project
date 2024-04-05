import React, { useState } from "react";
import { firstSearch } from "../../TestData";
import { ResultDetails } from "../SearchedResults/ResultDetails";
import "./favourites.scss";
export const Favourites = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
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
  return (
    <>
      <div className="flexy  favourites-page">
        <h3 style={{ flexGrow: 1 }}>Favourites</h3>
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            Products
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Suppliers
          </button>
        </div>
      </div>
      <div className="favourites-page">
        <div className="flexy offset-md-6">
          <button
            size="100%"
            style={{
              color: "orange",
              margin: "0 10px 10px 10px",
              border: "none",
            }}
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
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="col-md-12">
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
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>2</div>
        </div>
      </div>
    </>
  );
};
