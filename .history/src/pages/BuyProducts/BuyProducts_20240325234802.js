import React from "react";
import { Link } from "react-router-dom";
import "./buy-products.scss";
import Logo from "../../assets/images/logo.svg";
import Icon7 from "../../assets/images/jewelry.svg";
import { ProductAreas } from "../../components/ProductAreas/ProductAreas";
import Icon1 from "../../assets/images/construction.svg";
import Icon2 from "../../assets/images/gifts.svg";
import Icon3 from "../../assets/images/package.svg";
import Icon4 from "../../assets/images/lights.svg";
import Icon5 from "../../assets/images/vehicle.svg";
import Icon6 from "../../assets/images/beauty.svg";
import Icon8 from "../../assets/images/tv.svg";
import Icon9 from "../../assets/images/school.svg";
import Icon10 from "../../assets/images/furniture.svg";
import Icon11 from "../../assets/images/sports.svg";
import Icon12 from "../../assets/images/tools.svg";
import Icon13 from "../../assets/images/kids.svg";
import Icon14 from "../../assets/images/shoes.svg";
export const BuyProducts = () => {
  return (
    <>
      <div className="top-part flexy">
        {" "}
        <div className="dash-logo ">
          {" "}
          <Link to={"/"}>
            <img src={Logo} width="100%" />
          </Link>
        </div>
        <Link to={"/"} className="offset-md-8">
          Log out
        </Link>
      </div>
      <center className="mt6 buy-intro">
        <small>Step 1/6</small>
        <h4>Welcome to ProCURED</h4>
        <p>Please choose your main category for product you sell</p>
      </center>
      <div className="col-md-5 offset-md-3 flexy first-product-row">
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>
      </div>
      <div className="col-md-6 offset-md-3 flexy first-product-row sec-row">
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
      </div>{" "}
      <div className="col-md-4 offset-md-4 flexy first-product-row third-row">
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
      </div>{" "}
      <div className="col-md-2 offset-md-4 flexy first-product-row fourth-row">
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
        <div className="area-div">
          {" "}
          <ProductAreas Icon={Icon1} name="Lights & Lighting" />
        </div>{" "}
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
