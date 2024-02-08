import React from "react";
import Navbar from "../Navbar";
import "./menu.scss";
import Logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
function Menu(props) {
  const { colo2 } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h6
        onClick={handleShow}
        className="canvas-trigger"
        style={{ color: colo2 }}
      >
        All Categories
      </h6>

      <Offcanvas show={show} onHide={handleClose} placement="top">
        {/* <Offcanvas.Header closeButton></Offcanvas.Header> */}
        <Offcanvas.Body>
          <Navbar colo="black" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;
