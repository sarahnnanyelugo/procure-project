import React, { useState } from "react";
import "./features.scss";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import HRDashboard from "../../../assets/images/feat1.png";
import HRDashboard3 from "../../../assets/images/feat3.png";
import HRDashboard2 from "../../../assets/images/feat2.png";
import HRDashboard4 from "../../../assets/images/feat4.png";

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
          <div onMouseEnter={() => displayImageImage()}>
            {" "}
            <h1>Seize Control of Your Time: Optimize Attendance !</h1>
          </div>
          <div onMouseEnter={() => displayImageImage2()}>
            <h1>Elevate Performance, Embrace Success</h1>
          </div>
          <div onMouseEnter={() => displayImageImage3()}>
            {" "}
            <h1>Empower Learning, Inspire Growth</h1>
          </div>
          <div onMouseEnter={() => displayImageImage4()}>
            <h1>Empower Learning, Inspire Growth</h1>
          </div>
        </div>
      </div>
      <div className="col-md-7 dashboard-display">
        {" "}
        <img className="   logo" src={updateImage} alt="Scholar" width="100%" />
      </div>
    </div>
  );
};
export default Features;
