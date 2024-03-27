import React, { useEffect, useState } from "react";
import { frequentlyRequestedData, productRequestsData } from "../../TestData";
import "./product-requests.scss";
import { Recommended } from "./Recommended";
import { Requests } from "./Requests";
function ProductRequests() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  function setCat(cat) {
    setCategory(cat);
  }
  useEffect(() => {
    if (category === "*") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((prd) => prd.category.indexOf(category) !== -1)
      );
    }
  }, [category]);
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [state, setState] = useState({
    query: "",
    list: productRequestsData,
    list2: frequentlyRequestedData,
  });
  return (
    <div className="request-body">
      <div className="flexy flexyM">
        <h2 style={{ flexGrow: 1 }}>Product Request</h2>
        <button className="app-btn">Request products</button>
      </div>
      <div className="product-request-div flexy mt2">
        <div style={{ paddingRight: "30px" }} className="col-md-8">
          <div className="request-div ">
            <div className="transaction-page">
              <h2>My Orders</h2>
              <hr />
              <div className="tabs">
                <button
                  className={`tab ${checkActive(1, "active2")}`}
                  onClick={() => handleClick(1)}
                >
                  All order
                </button>
                <button
                  className={`tab ${checkActive(2, "active2")}`}
                  onClick={() => handleClick(2)}
                >
                  Pending
                </button>
                <button
                  className={`tab ${checkActive(3, "active2")}`}
                  onClick={() => handleClick(3)}
                >
                  Completed
                </button>{" "}
                <button
                  className={`tab ${checkActive(4, "active2")}`}
                  onClick={() => handleClick(4)}
                >
                  Canceled
                </button>{" "}
              </div>

              <div className="panels">
                <div className={`panel ${checkActive(1, "active2")}`}>
                  {state.list.map((data, index) => (
                    <Requests data={data} />
                  ))}
                </div>
                <div className={`panel ${checkActive(2, "active2")}`}>2</div>
                <div className={`panel ${checkActive(3, "active2")}`}>3</div>
                <div className={`panel ${checkActive(4, "active2")}`}>4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="request-div2 ">
            <h4>Frequently Requested Products by other Businesses</h4>
            <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-3">
              {state.list2.map((data, index) => (
                <Recommended data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRequests;
