import React from "react";
import { useState } from "react";
import { reviewedProducts } from "../../../TestData";
import { ReviewedOrder } from "../ReviewedOrder";
import "./leave-review.scss";
export const LeaveReview = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const [state, setState] = useState({
    query: "",

    list: reviewedProducts,
  });
  return (
    <>
      <div className="order-details-div leave-review">
        <p>
          <span>Order </span> / <span>Order Details</span> / Review
        </p>{" "}
        <h3 className="mt3">Leave a Review</h3>
        <div className="transaction-page">
          <div className="tabs ">
            <button
              className={`tab ${checkActive(1, "active2")}`}
              onClick={() => handleClick(1)}
            >
              Product Review
            </button>
            <button
              className={`tab ${checkActive(2, "active2")}`}
              onClick={() => handleClick(2)}
            >
              Store Review
            </button>
          </div>

          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <div className="d-md-flex">
                {" "}
                <div className="col-md-6">
                  {" "}
                  {state.list.map((data, index) => (
                    <ReviewedOrder data={data} />
                  ))}
                </div>
                <div className="col-md-6 mt6">
                  <form>
                    <textarea placeholder="Leave a comment for this product" />
                  </form>
                </div>
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>2</div>
          </div>
        </div>
      </div>
    </>
  );
};
