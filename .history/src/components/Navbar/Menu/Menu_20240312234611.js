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
  academics,
  studentLife,
  media,
} from "../../TestData";
function Menu(props) {
  const { colo2 } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        </Offcanvas.Body>
      </Offcanvas>
      {/* </div> */}
    </>
  );
}

export default Menu;
