import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Icon from "../../assets/images/upload-file.png";
import CountrySelector from "../../components/CountrySelector/CountrySelector";
import { FileUpload } from "../../components/FileUpload/FileUpload";
import { Password } from "../../components/Password/Password";
import { ToggleSwitch } from "../../components/ToggleSwitch/ToggleSwitch";
import "./acc-details.scss";
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
                  {" "}
                  <div className="col-md-8 ">
                    {" "}
                    <p
                      style={{
                        fontFamily: " SoraR",
                        color: "#969393",
                        fontSize: "11px",
                      }}
                    >
                      Joined in <span style={{ color: "#000" }}>2024</span>
                    </p>
                    <div className=" ">
                      <FileUpload />
                      <center>
                        {" "}
                        <img src={Icon} />
                      </center>
                    </div>
                  </div>
                </center>
              </div>
              <div className="col-md-8 form-container2 ">
                <Row>
                  <Col>
                    <div class="form">
                      <input
                        type="email"
                        name="email"
                        autocomplete="new-password"
                        required
                      />
                      <label for="text" class="label-name">
                        <span class="content-name">First Name</span>
                      </label>
                    </div>{" "}
                  </Col>{" "}
                  <Col>
                    <div class="form">
                      <input
                        type="email"
                        name="email"
                        autocomplete="new-password"
                        required
                      />
                      <label for="text" class="label-name">
                        <span class="content-name">Last Name</span>
                      </label>
                    </div>{" "}
                  </Col>
                </Row>
                <div class="form">
                  <input
                    type="email"
                    name="email"
                    autocomplete="new-password"
                    required
                  />
                  <label for="text" class="label-name">
                    <span class="content-name">Username</span>
                  </label>
                </div>{" "}
                <div class="form">
                  <input
                    type="email"
                    name="email"
                    autocomplete="new-password"
                    required
                  />
                  <label for="text" class="label-name">
                    <span class="content-name">Email</span>
                  </label>
                </div>{" "}
                <div class="form">
                  <input type="email" name="email" required />
                  <label for="tel" class="label-name">
                    <span class="content-name">Phone number</span>
                  </label>
                </div>{" "}
                <div className="offset-md-7 col-md-5">
                  <button>Save account information</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {" "}
            <div className="d-md-flex">
              <div className="col-md-4">
                <center>
                  {" "}
                  <div className="col-md-8 ">
                    {" "}
                    <p
                      style={{
                        fontFamily: " SoraR",
                        color: "#969393",
                        fontSize: "11px",
                      }}
                    ></p>
                    <div className=" ">
                      <FileUpload />
                    </div>
                  </div>
                </center>
              </div>
              <div className="col-md-8 form-container2 ">
                <form>
                  {" "}
                  <div class="form">
                    <input
                      type="email"
                      name="email"
                      autocomplete="new-password"
                      required
                    />
                    <label for="text" class="label-name">
                      <span class="content-name">Company Name</span>
                    </label>
                  </div>{" "}
                  <Row>
                    <Col>
                      <div class="form">
                        <input
                          type="email"
                          name="email"
                          autocomplete="new-password"
                          required
                        />
                        <label for="text" class="label-name">
                          <span class="content-name">First Name</span>
                        </label>
                      </div>{" "}
                    </Col>{" "}
                    <Col>
                      <div class="form">
                        <input
                          type="email"
                          name="email"
                          autocomplete="new-password"
                          required
                        />
                        <label for="text" class="label-name">
                          <span class="content-name">Last Name</span>
                        </label>
                      </div>{" "}
                    </Col>
                  </Row>
                  <div class="form">
                    <input
                      type="email"
                      name="email"
                      autocomplete="new-password"
                      required
                    />
                    <label for="text" class="label-name">
                      <span class="content-name">Registered CAC number</span>
                    </label>
                  </div>{" "}
                  <div class="form">
                    <input type="email" name="email" required />
                    <label for="email" class="label-name">
                      <span class="content-name">Company email</span>
                    </label>
                  </div>{" "}
                  <div class="form">
                    <input type="tel" name="tel" required />
                    <label for="tel" class="label-name">
                      <span class="content-name">Phone num</span>
                    </label>
                  </div>{" "}
                  <CountrySelector />
                  <div class="form">
                    <input type="email" name="email" required />
                    <label for="text" class="label-name">
                      <span class="content-name">Address</span>
                    </label>
                  </div>{" "}
                  <div class="form">
                    <input type="email" name="email" required />
                    <label for="text" class="label-name">
                      <span class="content-name">Postal Code</span>
                    </label>
                  </div>{" "}
                  <div class="form">
                    <input type="email" name="email" required />
                    <label for="text" class="label-name">
                      <span class="content-name">State</span>
                    </label>
                  </div>{" "}
                  <div className="offset-md-7 col-md-5">
                    <button>Save account information</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(3, "active2")}`}>
            <div className="col-md-7 form-container2 ">
              <Password placeholder="Current Password" />
              <Password placeholder="New Password" />
              <Password placeholder="Confirm Password" />
              <div className="offset-md-7 col-md-5">
                <button>Update password</button>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(4, "active2")}`}>
            <div className="flexy flexyM toggling-div col-md-7">
              <div className="col-md-8">
                <h6>New Products</h6>
                <p>Get updates for new products added to the platform</p>
              </div>
              <div className="col-md-2  offset-md-2">
                <ToggleSwitch />
              </div>
            </div>{" "}
            <div className="flexy flexyM toggling-div col-md-7">
              <div className="col-md-8">
                <h6>Educational resources</h6>
                <p>
                  Educational emails relating to best practices, helpful
                  features and advice on maximizing your revenue.
                </p>
              </div>
              <div className="col-md-2  offset-md-2">
                <ToggleSwitch />
              </div>
            </div>{" "}
            <div className="flexy flexyM toggling-div col-md-7">
              <div className="col-md-8">
                <h6>Messages</h6>
                <p>
                  Get an email alert informing you when there are new messages
                  in your mailbox.
                </p>
              </div>
              <div className="col-md-2 offset-md-2">
                <ToggleSwitch />
              </div>
            </div>{" "}
            <div className="flexy flexyM toggling-div col-md-7">
              <div className="col-md-8">
                <h6>Coupons & Events</h6>
                <p>
                  Notifications about ProCURED events and special online deals
                </p>
              </div>
              <div className="col-md-2  offset-md-2">
                <ToggleSwitch />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <div style={{ height: "300px" }} />
    </>
  );
}

export default AccountDetails;
