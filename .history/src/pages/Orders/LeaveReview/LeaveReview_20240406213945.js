import React from "react";

export const LeaveReview = () => {
  return (
    <>
      <div className="order-details-div">
        <p>
          <span>Order </span> / <span>Order Details</span> / Review
        </p>{" "}
        <h3 className="mt3">Leave a Review</h3>
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
              <div className="transactions-table-container2 flexy ">
                <div className="flexy flexyM col-md-6">
                  <div className="">
                    <p>
                      ORDER ID:{""}
                      {/* <span>{props.data.orderID}</span> */}
                      <span>#45567HG-FGYU-YTFG</span>
                    </p>

                    <br />
                    <Link to={"../order-details"}>View order details</Link>
                  </div>
                  <div>
                    {" "}
                    <button className="order-status-btn">Completed</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <Row>
                    <Col>
                      <h3>TOTAL</h3>
                    </Col>
                    <Col>
                      {" "}
                      <h3>SHIP TO:</h3>
                    </Col>
                    <Col>
                      <h3>ORDER PLACED:</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {/* <h2>₦{props.data.orderAmount}</h2> */}
                      <h2>₦500,000</h2>
                    </Col>
                    <Col>
                      {/* <Link>{props.data.shippedTo}</Link> */}
                      <Link>Patrick Benson</Link>
                    </Col>
                    <Col>
                      {/* <p>{props.data.date}</p> */}
                      <p style={{ color: "#969393", fontSize: "12px " }}>
                        12 February 2024
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
              1
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              {/* <OrderTable data={accountCredits} tableTitle="Transactions" /> */}
              2
            </div>
            <div className={`panel ${checkActive(3, "active2")}`}>
              {/* <OrderTable data={moneySpent} tableTitle="Transactions" /> */}
              3
            </div>
            <div className={`panel ${checkActive(4, "active2")}`}>
              {/* <OrderTable data={refund} tableTitle="Transactions" /> */}4
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
