import React from "react";
import "./menu.scss";
function Menu() {
  return (
    <>
      <div className="menu-wrap">
        <ul className="menu">
          <li className="menu-item">
            <a href="#">All Categories</a>
            <ul className="drop-menu">
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
