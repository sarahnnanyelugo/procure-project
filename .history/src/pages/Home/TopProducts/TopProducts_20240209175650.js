import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import {
  clothingData,
  ElectronicsData,
  hairAccessoriesData,
  homeAppliancesData,
  homeDecorData,
  jewelriesData,
  productsData,
  schoolSuppliesData,
  shoesData,
  toolsData,
} from "../../../TestData";
import { Clothing } from "../NewArrivals/Clothing";
import { HomeAppliances } from "../NewArrivals/HomeAppliances";
import { Tools } from "../NewArrivals/Tools";
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
  const [arrivals, setArrivals] = useState({
    query: "",
    list: clothingData,
    list2: homeAppliancesData,
    list3: toolsData,
    list4: schoolSuppliesData,
    list5: jewelriesData,
    list6: hairAccessoriesData,
    list7: ElectronicsData,
    list8: homeDecorData,
    list9: shoesData,
  });
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
            {state.list.map((data, index) => (
              <Clothing data={data} />
            ))}{" "}
            {state.list2.map((data, index) => (
              <HomeAppliances data={data} />
            ))}{" "}
            {state.list3.map((data, index) => (
              <Tools data={data} />
            ))}
          </div>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
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
      </Carousel.Item> */}
    </Carousel>
  );
}

export default TopProducts;
