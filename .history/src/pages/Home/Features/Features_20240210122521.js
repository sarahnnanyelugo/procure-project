import React, { useState } from "react";
import "./_features.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import HRDashboard from "../../../assets/images/feat1.png";
import HRDashboard3 from "../../../assets/images/feat3.png";
import HRDashboard2 from "../../../assets/images/feat2.png";
import HRDashboard4 from "../../../assets/images/feat4.png";
import Tick from "../../../assets/images/purple-tick.svg";

const Features = () => {
  const [updateImage, setUpdateImage] = useState(HRDashboard);
  function displayImageImage() {
    setUpdateImage(HRDashboard);
  }
  function displayImageImage2() {
    setUpdateImage(HRDashboard2);
  }
  function displayImageImage3() {
    setUpdateImage(HRDashboard3);
  }
  function displayImageImage4() {
    setUpdateImage(HRDashboard4);
  }
  return (
    <div className="dashboard-accordion-container flexy col-md-12 ">
      {" "}
      <div className="col-md-5">
        <div className="col-md-11">
          {" "}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => displayImageImage()}>
                <h3>Seize Control of Your Time: Optimize Attendance !</h3>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Streamline time and track attendance with our HRM <br />
                  efficient system. Accurately monitor work hours, manage time
                  <br /> off requests, and access error-free reports, all while
                  freeing <br />
                  up time for increased productivity.
                </p>
                <div className="flexy col-md-12">
                  <ul className="list-unstyled col-md-6">
                    <li>
                      {" "}
                      <img
                        className="   logo"
                        src={Tick}
                        alt="Scholar"
                        width="8%"
                      />
                      Track attendance with ease
                    </li>{" "}
                    <li>
                      {" "}
                      <img
                        className="   logo"
                        src={Tick}
                        alt="Scholar"
                        width="8%"
                      />
                      Convert time to timesheets
                    </li>
                  </ul>{" "}
                  <ul className="list-unstyled col-md-6">
                    <li>
                      {" "}
                      <img
                        className="   logo"
                        src={Tick}
                        alt="Scholar"
                        width="8%"
                      />
                      Schedule shifts effortlessly
                    </li>{" "}
                    <li>
                      {" "}
                      <img
                        className="   logo"
                        src={Tick}
                        alt="Scholar"
                        width="8%"
                      />
                      Track days off efficiently
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={() => displayImageImage2()}>
                <h3> Elevate Performance, Embrace Success</h3>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Transform the way you manage performance with our
                  <br /> powerful software solution. From goal setting and
                  appraisals
                  <br /> to feedback and development plans, our Performance
                  <br /> Management platform empowers you to drive employee
                  <br /> engagement, productivity, and growth.
                </p>
                <ul className="list-unstyled col-md-">
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    Continuous reviews and performance appraisals
                  </li>{" "}
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    Analytics to identify performance gaps
                  </li>{" "}
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    360-degree feedback
                  </li>
                </ul>{" "}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => displayImageImage3()}>
                <h3>Empower Learning, Inspire Growth</h3>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  educare HR Manager simplifies and empowers the <br />
                  management and delivery of a quality learning experience to{" "}
                  <br />
                  your workforce. Our learning and development system
                  <br /> offers dynamic learning opportunities for all teams,
                  featuring <br />
                  engaging content and virtual training.
                </p>
                <ul className="list-unstyled col-md-">
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    Quiz and assessments
                  </li>{" "}
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    Blended learning with virtual classrooms
                  </li>{" "}
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    Centralized course management
                  </li>
                </ul>{" "}
              </Accordion.Body>
            </Accordion.Item>{" "}
            <Accordion.Item eventKey="3">
              <Accordion.Header onClick={() => displayImageImage4()}>
                <h3>Empower Learning, Inspire Growth</h3>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  educare HR Manager simplifies and empowers the <br />
                  management and delivery of a quality learning experience to{" "}
                  <br />
                  your workforce. Our learning and development system
                  <br /> offers dynamic learning opportunities for all teams,
                  featuring <br />
                  engaging content and virtual training.
                </p>
                <ul className="list-unstyled col-md-">
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    Quiz and assessments
                  </li>{" "}
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    Blended learning with virtual classrooms
                  </li>{" "}
                  <li>
                    {" "}
                    <img
                      className="   logo"
                      src={Tick}
                      alt="Scholar"
                      width="5%"
                    />
                    Centralized course management
                  </li>
                </ul>{" "}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default Features;
