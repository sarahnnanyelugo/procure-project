import React from "react";
import "./home.scss";
import Video from "../../assets/images/web-video.mp4";
import Pricing from "../../assets/images/pricing.svg";
import Receipt from "../../assets/images/receipt.svg";
import Quality from "../../assets/images/quality.svg";
import Icon1 from "../../assets/images/construction.svg";
import Icon2 from "../../assets/images/gifts.svg";
import Icon3 from "../../assets/images/package.svg";
import Icon4 from "../../assets/images/lights.svg";
import Icon5 from "../../assets/images/vehicle.svg";
import Icon6 from "../../assets/images/beauty.svg";
import Icon7 from "../../assets/images/jewelry.svg";
import Icon8 from "../../assets/images/tv.svg";
import Icon9 from "../../assets/images/school.svg";
import Icon10 from "../../assets/images/furniture.svg";
import Icon11 from "../../assets/images/sports.svg";
import Icon12 from "../../assets/images/tools.svg";
import Icon13 from "../../assets/images/kids.svg";
import Icon14 from "../../assets/images/shoes.svg";
import Search from "../../assets/images/search.svg";
import Audio from "../../assets/images/audio.svg";
import Cam from "../../assets/images/cam.svg";
import OrderPic from "../../assets/images/order-pic.png";
import Brand1 from "../../assets/images/unilever.png";
import Brand2 from "../../assets/images/chi.png";
import Brand3 from "../../assets/images/hp.svg";
import Brand4 from "../../assets/images/dell.svg";
import Brand5 from "../../assets/images/pz.png";
import Brand6 from "../../assets/images/indomie.png";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import TopProducts from "./TopProducts/TopProducts";
import Features from "./Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import PostRequest from "../../components/PostRequest/PostRequest";
import { ProductAreas } from "../../components/ProductAreas/ProductAreas";

export const Home = () => {
  return (
    <>
      <div id="cover">
        <video
          className="vid"
          width="100%"
          autoplay="true"
          loop="true"
          muted="true"
          playsinline=""
          src={Video}
        ></video>
        <div className=" col-md-12 overlay">
          <Navbar colo="#fff" />
          <div className="col-md-6 col-12 offset-md-1 mt mobile-padding">
            {" "}
            <h1>
              Procure your bulk items <br />
              without stress
            </h1>
          </div>

          <div className="col-md-6 offset-md-1 mt6 input-div mobile-padding">
            {" "}
            <input placeholder="What are you looking to buy?" />
            <div className="input-overlay flexy flexyM col-md-12 col-12">
              <div className="col-md- ">
                <img
                  src={Search}
                  height="24px"
                  width="24px"
                  className="input-search "
                />
              </div>
              <div className="flexy flexyM offset-md-7 offset-5  ">
                <PostRequest />
                <img
                  src={Cam}
                  height="24px"
                  width="24px"
                  className="input-actions  sign-up2"
                />
                <button className="app-btn  col-md-9 sign-up">Sign up</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-md-1 mt2 flexy popular-searches mobile-padding">
            <h6>Popularly searched:</h6>
            <button>Shoes</button>
            <button>Car parts</button>
            <button>Electronics</button>
            <button>Laptop</button>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 brands">
        <p>Trusted By World’s Biggest Brands</p>
        <ul className="list-inline list-unstyled mt3">
          <li className="list-inline-item">
            <img src={Brand1} width="32px" height="42px" />
          </li>{" "}
          <li className="list-inline-item">
            <img src={Brand2} width="52px" height="32px" />
          </li>{" "}
          <li className="list-inline-item">
            <img src={Brand3} width="52px" height="32px" />
          </li>{" "}
          <li className="list-inline-item">
            <img src={Brand4} width="52px" height="32px" />
          </li>{" "}
          <li className="list-inline-item">
            <img src={Brand5} width="52px" height="32px" />
          </li>{" "}
          <li className="list-inline-item">
            <img src={Brand6} width="78px" height="39px" />
          </li>
        </ul>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 mt8 mobile-padding">
          <div className="col">
            <div className="benefits b-1">
              <img src={Pricing} height="36px" width="36px" />
              <h3>Cost effective bulk purchasing with consolidated delivery</h3>
              <p>
                Order from our verified suppliers with attractive discount
                offering and various product range and get it all in one
                delivery.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="benefits b-2">
              <img src={Receipt} height="36px" width="36px" />
              <h3>Streamlined Ordering Process</h3>
              <p>
                Order in a seamless and efficient process. Our procurement
                process is straightforward, saving you time and effort.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="benefits b-3">
              <img src={Pricing} height="36px" width="36px" />
              <h3>Unique Sorting Options</h3>
              <p>
                We are able to offer solutions that fit into your businesses
                budget and turnaround time.
              </p>
            </div>
          </div>{" "}
          <div className="col">
            <div className="benefits b-4">
              <img src={Quality} height="36px" width="36px" />
              <h3>Quality Assurance and Warranty</h3>
              <p>
                Quality is paramount for us. We implement rigorous quality
                assurance measures to ensure that products you receive meet high
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" products col-md-10 offset-md-1 flexy mobile-padding">
        <div className="col-md-5">
          <h1>
            Explore a vast <br /> array of products personalised to suit your
            business needs.
          </h1>
          <p>
            Explore products and suppliers for your business from millions of
            offerings worldwide.
          </p>
          <Link className="app-btn" to={""}>
            View All
          </Link>
        </div>
        <div className="col-md-6 offset-md-1 areas-div flexy flexyM ">
          <div className="col-md-3 col-3 ">
            <div className="area1">
              <ProductAreas Icon={Icon1} name="Construction & Real Estate" />
            </div>{" "}
            <div className=" area2">
              <ProductAreas Icon={Icon2} name="Gifts & Crafts" />
            </div>{" "}
            <div className="area3">
              <ProductAreas Icon={Icon3} name="Packaging & Printing" />
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div className="areas area4">
              <center>
                {" "}
                <img src={Icon4} />
                <p>Lights & Lighting</p>
              </center>
            </div>
            <div className="areas area5">
              <center>
                {" "}
                <img src={Icon5} />
                <p>Vehicle Accessories, …</p>
              </center>
            </div>
            <div className="areas area6">
              <center>
                {" "}
                <img src={Icon6} />
                <p>Beauty</p>
              </center>
            </div>
            <div className="areas area7">
              <center>
                {" "}
                <img src={Icon7} />
                <p>Jewelry, Eyewear</p>
              </center>
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div className="areas area8">
              <center>
                {" "}
                <img src={Icon8} />
                <p>Home Appliances</p>
              </center>
            </div>
            <div className="areas area9">
              <center>
                {" "}
                <img src={Icon9} />
                <p>School & Office Supplies</p>
              </center>
            </div>
            <div className="areas area10">
              <center>
                {" "}
                <img src={Icon10} />
                <p>Furniture</p>
              </center>
            </div>
            <div className="areas area11">
              <center>
                {" "}
                <img src={Icon11} />
                <p>Sports & Entertainment</p>
              </center>
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div className="areas area12">
              <center>
                {" "}
                <img src={Icon12} />
                <p>Tools & Hardware</p>
              </center>
            </div>
            <div className="areas area13">
              <center>
                {" "}
                <img src={Icon13} />
                <p>Mother, Kids & Toys</p>
              </center>
            </div>
            <div className="areas area14">
              <center>
                {" "}
                <img src={Icon14} />
                <p>Shoes & Accessories</p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="top-products  mobile-padding">
        <div className="col-md-10 offset-md-1">
          <h1>Top Curated Products by Industry</h1>
          <TopProducts />
        </div>
      </div>
      <div className="col-md-10 offset-md-1 mobile-padding">
        <Features />
      </div>
      <div className="   mobile-padding">
        {" "}
        <div className="col-md-10 offset-md-1 mission-div flexy ">
          <div className="col-md-7">
            <h6>Our Mission</h6>
            <p className="col-md-10 col-9">
              Provide businesses with a more cost effective, time saving and
              efficient way to carry out procurement.
            </p>
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>

      <div className="col-md-12 get-started-div mobile-padding">
        <center>
          <div className="col-md-10">
            <h1 className="col-md-6">Quality orders down to your doorstep</h1>
            <button className="app-btn">Get started</button>
            <img src={OrderPic} width="100%" />
          </div>
        </center>
      </div>
      <Testimonial />

      <div className="prefooter-div col-md-8 offset-md-2 col-10 offset-1">
        <center>
          <h2>Ready to get started?</h2>
          <p>Register now to browse millions of goods from vetted vendors.</p>
          <button className="app-btn">Get started</button>
        </center>
      </div>
    </>
  );
};
