import React from "react";
import "./menu.scss";
function Menu() {
  return (
    <>
      <div className="menu-wrap col-md-12">
        <ul className="menu col-md-12">
          <li className="menu-item">
            <a href="#">All Categories</a>
            <ul className="drop-menu col-md-12">
              <li className="drop-menu-item">
                <a href="#">Page 1</a>
              </li>
              <li className="drop-menu-item">
                <a href="#">Page 2</a>
              </li>
              <li className="drop-menu-item">
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
