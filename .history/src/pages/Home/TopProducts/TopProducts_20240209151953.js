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
          <button className="app-btn">Explore all products</button>
        </center>
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
          <button className="app-btn">Explore all products</button>
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
          <button className="app-btn">Explore all products</button>
        </center>
      </Carousel.Item>
    </Carousel>
  );
}

export default TopProducts;
