import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { productsData } from "../../../TestData";
import { Products } from "./Products";
import "./top-products.scss";
function TopProducts({ data }) {
  const [state, setState] = useState({
    query: "",
    list: data,
  });
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    if (!state.list || !Array.isArray(state.list)) {
      return <p>No data available</p>;
    }
    setProductsData(data.slice(0, 5));
  }, []);

  return (
    <Carousel fade>
      <Carousel.Item>
        {" "}
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {" "}
          {productsData.map((data, index) => (
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
