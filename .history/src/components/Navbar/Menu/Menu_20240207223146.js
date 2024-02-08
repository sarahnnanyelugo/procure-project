import React from "react";
import "./menu.scss";
function Menu() {
  return (
    <>
      <div class="menu-wrap">
        <ul class="menu">
          <li class="menu-item">
            <a href="#">All Categories</a>
            <ul class="drop-menu">
              <li class="drop-menu-item">
                <a href="#">Page 1</a>
              </li>
              <li class="drop-menu-item">
                <a href="#">Page 2</a>
              </li>
              <li class="drop-menu-item">
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
