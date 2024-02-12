import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo.svg";
import Arrow from "../../assets/images/arrow-right.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer-div ">
        <div className="col-md-10 offset-md-1">
          {" "}
          <div className="flexy flexyM">
            <div className="col-md-4 footer-logo">
              <img width="100%" src={Logo} alt="" className="col-md-7 col-6" />
              <p className="col-md-10">
                {" "}
                ProCURED enables provide businesses with a more cost effective,
                time saving and efficient way to carry out procurement.
              </p>
            </div>
            <div className="contact-div col-md-2 offset-md-6">
              <center>
                {" "}
                <img
                  width="100%"
                  src={Arrow}
                  alt=""
                  className="col-md-2 col-6"
                />
              </center>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
