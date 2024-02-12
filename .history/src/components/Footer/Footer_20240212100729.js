import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo.svg";

export const Footer = () => {
  return (
    <>
      <footer className="footer-div ">
        <div className="col-md-10 offset-md-1">
          {" "}
          <div className="flexy flexyM">
            <div className="col-md-4">
              <img width="100%" src={Logo} alt="" className="col-md-12 col-6" />
              <p>
                {" "}
                ProCURED enables provide businesses with a more cost effective,
                time saving and efficient way to carry out procurement.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
