import React from "react";
import Navbar from "../Navbar";
import "./menu.scss";
import Logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  schoolSuppli,
  Construction,
  electricalEquipments,
} from "../../../TestData";
function Menu(props) {
  const { colo2 } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeTab, setActiveTab] = useState("School Supplies"); // Initial active tab
  const handleTabHover = (cityName) => {
    setActiveTab(cityName);
  };
  return (
    <>
      <h6
        // onMouseEnter={handleShow}
        onClick={handleShow}
        className="canvas-trigger"
        style={{ color: colo2 }}
      >
        All Categories
      </h6>
      {/* <div className="menu-offcanvas"> */}{" "}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        style={{ height: "50%" }}
      >
        <Offcanvas.Body>
          <Navbar colo="black" />
          <div className="col-md-12 flexy">
            <div className="col-md-3">
              {" "}
              {[
                "School supplies",
                "Construction",
                "Academics",
                "Student Life",
                "Media",
              ].map((city) => (
                <button
                  key={city}
                  className={`tablinks ${activeTab === city ? "active2" : ""}`}
                  onMouseEnter={() => handleTabHover(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* </div> */}
    </>
  );
}

export default Menu;
