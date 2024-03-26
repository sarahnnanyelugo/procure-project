import React from "react";
import Navbar from "../Navbar";
import "./menu.scss";
import Logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
  categoryButtons,
  schoolSupplies,
  Construction,
  electricalEquipments,
  electricalSuppliers,
  constructionSuppliers,
  schoolSuppliers,
} from "../../../TestData";
function Menu(props) {
  const { colo2 } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeTab, setActiveTab] = useState("School supplies"); // Initial active tab
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
      <div className="nav-offcanvas">
        {" "}
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="top"
          style={{ height: "50%" }}
        >
          <Offcanvas.Body>
            <Navbar colo="black" />
            <div className="nav-tab col-md-10 offset-md-1">
              <div className="col-md-12 flexy tab ">
                <div className="col-md-3 ">
                  <h5>Categories</h5>{" "}
                  {categoryButtons.map((categoryName) => (
                    <button
                      // key={city}
                      className={`tablinks ${
                        activeTab === categoryName ? "active2" : ""
                      }`}
                      onMouseEnter={() => handleTabHover(city)}
                    >
                      {city.categoryName}
                    </button>
                  ))}
                  {/* {categoryButtons.map((city, index) => (
                    <button
                      key={city}
                      className={`tablinks ${
                        activeTab === city ? "active2" : ""
                      }`}
                      onMouseEnter={() => handleTabHover(city)}
                    >
                      {city.categoryName}
                    </button>
                  ))} */}
                </div>
                <div className="col-md-9 subs ">
                  <div
                    id="School supplies"
                    className={`tabcontent flexy ${
                      activeTab === "School supplies" ? "active2" : ""
                    }`}
                  >
                    <div className="col-md-8">
                      {" "}
                      <h5>School Supplies</h5>
                      <ul className="list-unstyled row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
                        {schoolSupplies.map((link, index) => (
                          <li key={index} className="list-unstyled">
                            <NavLink
                              to={link.to}
                              activeClassName="active"
                              className="menu-navs col"
                              onClick={handleClose}
                            >
                              {link.text}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-4 suppliers-list">
                      <h5>Top Suppliers </h5>
                      <ul className="list-unstyled ">
                        {schoolSuppliers.map((link, index) => (
                          <li key={index} className="list-unstyled">
                            <img src={link.img} height="60px" width="60px" />
                            {link.supplier}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    id="Construction"
                    className={`tabcontent ${
                      activeTab === "Construction" ? "active2" : ""
                    }`}
                  >
                    <div className="col-md-8">
                      <h5>Construction</h5>
                      <ul className="list-unstyled list-unstyled row row-cols-3 row-cols-lg-3 g-2 g-lg-3 ">
                        {Construction.map((link, index) => (
                          <li key={index} className="list-unstyled">
                            <NavLink
                              to={link.to}
                              activeClassName="active"
                              className="menu-navs col"
                              onClick={handleClose}
                            >
                              {link.text}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-4 suppliers-list">
                      <h5>Top Suppliers </h5>
                      <ul className="list-unstyled ">
                        {constructionSuppliers.map((link, index) => (
                          <li key={index} className="list-unstyled">
                            <img src={link.img} height="60px" width="60px" />
                            {link.supplier}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    id="Electrical Equipments"
                    className={`tabcontent ${
                      activeTab === "Electrical Equipments" ? "active2" : ""
                    }`}
                  >
                    <div className="col-md-8">
                      {" "}
                      <h5>Electrical Equipments</h5>
                      <ul className="list-unstyled list-unstyled row row-cols-3 row-cols-lg-3 g-2 g-lg-3 ">
                        {electricalEquipments.map((link, index) => (
                          <li key={index} className="list-unstyled">
                            <NavLink
                              to={link.to}
                              activeClassName="active"
                              className="menu-navs col"
                              onClick={handleClose}
                            >
                              {link.text}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-4 suppliers-list">
                      <h5>Top Suppliers </h5>
                      <ul className="list-unstyled ">
                        {electricalSuppliers.map((link, index) => (
                          <li key={index} className="list-unstyled">
                            <img src={link.img} height="60px" width="60px" />
                            {link.supplier}
                          </li>
                        ))}
                      </ul>
                    </div>
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
      </div>
      {/* </div> */}
    </>
  );
}

export default Menu;
