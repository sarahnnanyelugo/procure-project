import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProfileAvater from "../../assets/images/profile-icon.png";

function AccountDetails() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <h3>Account Details</h3>
      <div className="transaction-page">
        <hr />
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            Profile
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Business Profile
          </button>
          <button
            className={`tab ${checkActive(3, "active2")}`}
            onClick={() => handleClick(3)}
          >
            Password
          </button>{" "}
          <button
            className={`tab ${checkActive(4, "active2")}`}
            onClick={() => handleClick(4)}
          >
            Notifications
          </button>{" "}
        </div>

        <div className="panels">
          <div className={`panel  ${checkActive(1, "active2")}`}>
            <div className="d-md-flex">
              <div className="col-md-4">
                <center>
                  <img src={ProfileAvater} />
                </center>
              </div>
              <div className="col-md-8">
                <Row>
                  <Col>
                    <input type="text" />
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>2</div>
          <div className={`panel ${checkActive(3, "active2")}`}>3</div>
          <div className={`panel ${checkActive(4, "active2")}`}>4</div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}

export default AccountDetails;
