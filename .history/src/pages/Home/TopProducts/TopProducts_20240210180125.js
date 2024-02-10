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
import { Electronics } from "../NewArrivals/Electronics";
import { HairAccessories } from "../NewArrivals/HairAccessories";
import { HomeAppliances } from "../NewArrivals/HomeAppliances";
import { HomeDecor } from "../NewArrivals/HomeDecor";
import { Jewelries } from "../NewArrivals/Jewelries";
import { SchoolSupplies } from "../NewArrivals/SchoolSupplies";
import { Shoes } from "../NewArrivals/Shoes";
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
    <>
      <div className="products-carousel">
        {" "}
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
              <h1>New Arrivals</h1>
              <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
                <div className="col">
                  {" "}
                  <Clothing data={arrivals.list} />
                </div>
                <div className="col">
                  <HomeAppliances data={arrivals.list2} />
                </div>
                <div className="col">
                  {" "}
                  <Tools data={arrivals.list3} />
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
            <div className="mt7">
              <h1>New Arrivals</h1>
              <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
                <div className="col">
                  {" "}
                  <Shoes data={arrivals.list9} />
                </div>
                <div className="col">
                  {" "}
                  <SchoolSupplies data={arrivals.list4} />
                </div>

                <div className="col">
                  <Jewelries data={arrivals.list5} />
                </div>
              </div>
            </div>
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
            <div className="mt7">
              <h1>New Arrivals</h1>
              <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4">
                <div className="col">
                  {" "}
                  <HairAccessories data={arrivals.list6} />
                </div>

                <div className="col">
                  <Electronics data={arrivals.list7} />
                </div>

                <div className="col">
                  {" "}
                  <HomeDecor data={arrivals.list8} />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default TopProducts;
