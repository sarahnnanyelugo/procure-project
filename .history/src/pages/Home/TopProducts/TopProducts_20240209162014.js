import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { productsData } from "../../../TestData";
import { Products } from "./Products";
import "./top-products.scss";
function TopProducts() {
  const [state, setState] = useState({
    query: "",
    list: productsData,
  });
  const [products, setProductsData] = useState([]);
  const [products2, setProductsData2] = useState([]);
  const [products3, setProductsData3] = useState([]);
  useEffect(() => {
    if (!state.list || !Array.isArray(state.list)) {
      return <p>No data available</p>;
    }
    setProductsData(state.list.slice(0, 5));
    setProductsData2(state.list.slice(5, 10));
    setProductsData3(state.list.slice(10, 15));
  }, []);

  return (
    <Carousel fade>
      <Carousel.Item>
        {" "}
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-4">
          {" "}
          {products.map((data, index) => (
            <Products data={data} />
          ))}
        </div>
        <center>
          <button className="app-btn all-products-btn">
            Explore all products
          </button>
        </center>
        <div className="mt7">
          <h2>New Arrivals</h2>
          <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
            <div className="col">
              <div className="flexy arrivals-div">
                <div className="col-md-6 arrivals1"></div>
                <div className="col-md-6">
                  <div className="arrivals2"></div>
                  <div className="arrivals3"></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" arrivals-div">
                <div className="col-md-6 arrivals1"></div>
                <div className="col-md-6 flexy">
                  <div className="arrivals2"></div>
                  <div className="arrivals3"></div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="flexy arrivals-div">
                <div className="col-md-6 flexy">
                  <div className="arrivals2 col-md-6"></div>
                  <div className="arrivals3 col-md-6"></div>
                </div>
                <div className="col-md-6 flexy">
                  <div className="arrivals2 col-md-6"></div>
                  <div className="arrivals3 col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        {" "}
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-4">
          {" "}
          {products2.map((data, index) => (
            <Products data={data} />
          ))}
        </div>{" "}
        <center>
          {" "}
          <button className="app-btn all-products-btn">
            Explore all products
          </button>
        </center>
      </Carousel.Item>
      <Carousel.Item>
        {" "}
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-4">
          {" "}
          {products3.map((data, index) => (
            <Products data={data} />
          ))}
        </div>
        <center>
          <button className="app-btn all-products-btn">
            Explore all products
          </button>
        </center>
      </Carousel.Item>
    </Carousel>
  );
}

export default TopProducts;
