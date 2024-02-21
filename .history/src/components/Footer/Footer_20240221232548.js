import React from "react";
import "./footer.scss";
import Logo from "../../assets/images/logo.svg";
import Arrow from "../../assets/images/arrow-right.png";
import FB from "../../assets/images/fb.svg";
import Linkedin from "../../assets/images/linked.svg";
import IG from "../../assets/images/ig.svg";
import Whatsapp from "../../assets/images/whatsapp.svg";
import Youtube from "../../assets/images/youtube.svg";
import Twitter from "../../assets/images/twitter.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer-div mobile-padding ">
        <div className="col-md-10 offset-md-1">
          {" "}
          <div className="flexy flexyM">
            <div className="col-md-4 footer-logo col-6">
              <img width="100%" src={Logo} alt="" className="col-md-7 col-10" />
              <p className="col-md-10">
                {" "}
                ProCURED enables provide businesses with a more cost effective,
                time saving and efficient way to carry out procurement.
              </p>
            </div>
            <div className="contact-div col-md-2 offset-md-6 col-5 offset-1">
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
          <div className="flexy">
            <div className="col-md-6 flexy flexyM col-12">
              <div className="col-md-6 col-6">
                <h4>Customer Support</h4>
                <ul className="list-unstyled">
                  <li>
                    <NavLink>Help Center</NavLink>
                  </li>
                  <li>
                    <NavLink>User Guide</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/cancellation-policy"}>
                      Return & Cancellation Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink>Check Order Status</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-6">
                <h4>About Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <NavLink to={"/about-us"}>About Our Company</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/success-stories"}>Success Stories</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/careers"}>Job & Careers</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 flexy flexyM col-12">
              <div className="col-md-6 col-6">
                <h4>For Buyers</h4>
                <ul className="list-unstyled">
                  <li>
                    <NavLink>Submit your Request</NavLink>
                  </li>
                  <li>
                    <NavLink>Membership</NavLink>
                  </li>
                  <li>
                    <NavLink>Help Center</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/browse-supplies"}>Browse Suppliers</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-6">
                <h4>For Sellers</h4>
                <ul className="list-unstyled">
                  <li>
                    <NavLink to={"/become-supplier"}>Starting Selling</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/verified-supplier"}>
                      Become a Verified Supplier
                    </NavLink>
                  </li>
                  <li>
                    <NavLink>Partnership</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="list-unstyled list-inline media-links">
            <li className="list-inline-item ">
              <NavLink to={""} target="_blank">
                <img src={FB} width="31px" height="31px" />
              </NavLink>
            </li>{" "}
            <li className="list-inline-item ">
              <NavLink to={""} target="_blank">
                <img src={Twitter} width="31px" height="31px" />
              </NavLink>
            </li>{" "}
            <li className="list-inline-item ">
              <NavLink to={""} target="_blank">
                <img src={Linkedin} width="31px" height="31px" />
              </NavLink>
            </li>{" "}
            <li className="list-inline-item ">
              <NavLink to={""} target="_blank">
                <img src={IG} width="31px" height="31px" />
              </NavLink>
            </li>{" "}
            <li className="list-inline-item ">
              <NavLink to={""} target="_blank">
                <img src={Whatsapp} width="31px" height="31px" />
              </NavLink>
            </li>{" "}
            <li className="list-inline-item ">
              <NavLink to={""} target="_blank">
                <img src={Youtube} width="31px" height="31px" />
              </NavLink>
            </li>
          </ul>
          <hr />
          <ul className="col-md-8 list-inline list-unstyled">
            <li className="list-inline-item">Lagos</li>
            <li className="list-inline-item">Abuja</li>
            <li className="list-inline-item">Port Harcourt</li>
            <li className="list-inline-item">Owerri</li>
            <li className="list-inline-item">Enugu</li>
            <li className="list-inline-item">Calabar</li>
          </ul>
        </div>
      </footer>
    </>
  );
};
