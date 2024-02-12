import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer-div col-md-10 offset-md-1">
        <div className="flexy flexyM">
          <div className="col-md-4">
            <img width="100%" src={Logo} alt="" className="col-md-2 col-6" />
            <p></p>
          </div>
        </div>
      </footer>
    </>
  );
};
