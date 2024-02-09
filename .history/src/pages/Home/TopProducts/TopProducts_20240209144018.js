import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { productsData } from "../../../TestData";
import { Products } from "./Products";
import "./top-products.scss";
function TopProducts() {
  const [state, setState] = useState({
    query: "",
    list: productsData,
  });
  const [products, setProductsData] = useState([]);
  useEffect(() => {
    if (!state.list || !Array.isArray(state.list)) {
      return <p>No data available</p>;
    }
    setProductsData(state.list.slice(0, 5));
  }, []);

  return (
    <Carousel fade>
      <Carousel.Item>
        {" "}
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-5">
          {" "}
          {products.map((data, index) => (
            <Products data={data} />
          ))}
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>2</Carousel.Item>
      <Carousel.Item>3</Carousel.Item> */}
    </Carousel>
  );
}

export default TopProducts;
