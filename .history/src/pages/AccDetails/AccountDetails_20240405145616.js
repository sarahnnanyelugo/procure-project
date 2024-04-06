import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProfileAvater from "../../assets/images/profile-icon.png";
import Icon from "../../assets/images/upload-file.png";
import CountrySelector from "../../components/CountrySelector/CountrySelector";
import { Password } from "../../components/Password/Password";
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
                    <img src={ProfileAvater} />
                    <p
                      style={{
                        fontFamily: " SoraR",
                        color: "#969393",
                        fontSize: "11px",
                      }}
                    >
                      Joined in <span style={{ color: "#000" }}>2024</span>
                    </p>
                    <div className="file-input-div ">
                      <center>
                        {" "}
                        <img src={Icon} />
                      </center>
                      <input type="file" placeholder="click" className="mt1" />
                      <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
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
                    <img src={ProfileAvater} />
                    <p
                      style={{
                        fontFamily: " SoraR",
                        color: "#969393",
                        fontSize: "11px",
                      }}
                    >
                      Joined in <span style={{ color: "#000" }}>2024</span>
                    </p>
                    <div className="file-input-div ">
                      <center>
                        {" "}
                        <img src={Icon} />
                      </center>
                      <input type="file" placeholder="click" className="mt1" />
                      <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
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
            <div className="col-md-7">
              <Password placeholder="Current Password" />
              <Password placeholder="New Password" />
              <Password placeholder="Confirm Password" />
            </div>
            <div className="offset-md-7 col-md-5">
              <button>Save account information</button>
            </div>
          </div>
          <div className={`panel ${checkActive(4, "active2")}`}>4</div>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}

export default AccountDetails;
