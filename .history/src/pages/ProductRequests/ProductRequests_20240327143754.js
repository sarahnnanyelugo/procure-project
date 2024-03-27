import React, { useState } from "react";
import { productRequestsData } from "../../TestData";
import "./product-requests.scss";
import { Requests } from "./Requests";
function ProductRequests() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const [state, setState] = useState({
    query: "",
    list: productRequestsData,
  });
  return (
    <>
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
                  {/* {state.list.map((data, index) => (
                   
                  ))} */}
                  <Requests data={productRequestsData} />
                </div>
                <div className={`panel ${checkActive(2, "active2")}`}>2</div>
                <div className={`panel ${checkActive(3, "active2")}`}>3</div>
                <div className={`panel ${checkActive(4, "active2")}`}>4</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="request-div ">
            <h4>Frequently Requested Products by other Businesses</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRequests;
