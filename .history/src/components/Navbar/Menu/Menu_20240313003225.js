import React from "react";
import Navbar from "../Navbar";
import "./menu.scss";
import Logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  schoolSupplies,
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
          <div className="nav-tab">
            {" "}
            <div className="col-md-12 flexy tab  ">
              <div className="col-md-3">
                {" "}
                {[
                  "School supplies",
                  "Construction",
                  "Electrical Equipments",
                ].map((city) => (
                  <button
                    key={city}
                    className={`tablinks ${
                      activeTab === city ? "active2" : ""
                    }`}
                    onMouseEnter={() => handleTabHover(city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
              <div className="row row-cols-3 row-cols-lg-3 g-2 g-lg-3 col-md-6 subs">
                <div
                  id="School supplies"
                  className={`tabcontent col ${
                    activeTab === "School supplies" ? "active2" : ""
                  }`}
                >
                  <ul className="list-unstyled">
                    {schoolSupplies.map((link, index) => (
                      <li key={index} className="list-unstyled">
                        <NavLink
                          to={link.to}
                          activeClassName="active"
                          className="menu-navs"
                          onClick={handleClose}
                        >
                          {link.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  id="Construction"
                  className={`tabcontent ${
                    activeTab === "Construction" ? "active2" : ""
                  }`}
                >
                  <ul className="list-unstyled">
                    {Construction.map((link, index) => (
                      <li key={index} className="list-unstyled">
                        <NavLink
                          to={link.to}
                          activeClassName="active"
                          className="menu-navs"
                          onClick={handleClose}
                        >
                          {link.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  id="Electrical Equipments"
                  className={`tabcontent ${
                    activeTab === "Electrical Equipments" ? "active2" : ""
                  }`}
                >
                  <ul className="list-unstyled">
                    {electricalEquipments.map((link, index) => (
                      <li key={index} className="list-unstyled">
                        <NavLink
                          to={link.to}
                          activeClassName="active"
                          className="menu-navs"
                          onClick={handleClose}
                        >
                          {link.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div
                id="Student Life"
                className={`tabcontent ${
                  activeTab === "Student Life" ? "active2" : ""
                }`}
              >
                <ul className="list-unstyled">
                  {studentLife.map((link, index) => (
                    <li key={index} className="list-unstyled">
                      <NavLink
                        to={link.to}
                        activeClassName="active"
                        className="menu-navs"
                        onClick={handleClose}
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div> */}
                {/* <div
                id="Media"
                className={`tabcontent ${
                  activeTab === "Media" ? "active2" : ""
                }`}
              >
                <ul className="list-unstyled">
                  {media.map((link, index) => (
                    <li key={index} className="list-unstyled">
                      <NavLink
                        to={link.to}
                        activeClassName="active"
                        className="menu-navs"
                        onClick={handleClose}
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div> */}
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* </div> */}
    </>
  );
}

export default Menu;
