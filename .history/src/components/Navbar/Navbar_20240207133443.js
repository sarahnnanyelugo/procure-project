import React from "react";
import Logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="logo-div col-md-1">
          <img width="100%" src={Logo} alt="" />
        </div>
      </div>
    </>
  );
}
