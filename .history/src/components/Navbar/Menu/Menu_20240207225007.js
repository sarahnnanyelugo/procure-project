import React from "react";
import Navbar from "../Navbar";
import "./menu.scss";
function Menu() {
  return (
    <>
      <div className="menu-wrap col-md-12">
        <ul className="menu col-md-12">
          <li className="menu-item">
            <a href="#">All Categories</a>
            <ul className="drop-menu col-md-12">
              <Navbar />
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
