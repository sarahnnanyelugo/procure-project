import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Hastletop from "../../assets/images/hastletop.png";
import Icon from "../../assets/images/export-icon.png";
import Accordion from "react-bootstrap/Accordion";

import "./suppliers-store.scss";
import FilterOffcanvas from "../SearchedResults/FilterOffcanvas";
import { suppliersStoreCategories, supplierStoreData } from "../../TestData";
import { Products } from "./Products";
const SuppliersStore = () => {
  const [category, setCategory] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(supplierStoreData);
  const setCat = function (cat) {
    return setCategory(cat);
  };
  useEffect(() => {
    if (category === 0) {
      setFilteredProducts(supplierStoreData);
    } else {
      setFilteredProducts(
        supplierStoreData.filter((prd) => prd.category.includes(category))
      );
    }
  }, [category]);
  const [state, setState] = useState({
    query: "",
    list: filteredProducts,
  });
  return (
    <>
      <Navbar colo="#000" />
      <div className="offset-md-1 col-md-10 bredcrmb">
        <div className="flexy flexyM">
          <Link to={"/searched-results/:cat_id"}>Back</Link>{" "}
          <Link to={"/"}>Home</Link>
          <p>Membership</p>
        </div>
        <hr />
      </div>

      <div className="suppliers-store-bg">
        <div className="col-md-6 offset-md-1 flexy">
          <img
            src={Hastletop}
            height="119px"
            width="119px"
            className="supplier-logo"
          />
          <div>
            <h1>Hastletop Stationaries</h1>
            <p>
              4.9 (40) | School Supplies{" "}
              <img src={Icon} height="24px" width="24px" />
            </p>
            <div className="flexy flexyM">
              {" "}
              <p>
                <img src={Icon} height="24px" width="24px" />
                Ships directly from brand (± 3-6 days)
              </p>
              <p style={{ marginLeft: "30px" }}>
                <img src={Icon} height="24px" width="24px" />
                ₦100 minimum order value
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 flexy offset-md-1 mt5">
        <div className="flexy flexyM">
          <FilterOffcanvas />
          <button className="filter-btns2" style={{ marginLeft: "10px" }}>
            Sales
          </button>
          <button className="filter-btns2" style={{ marginLeft: "10px" }}>
            Best Sellers
          </button>
        </div>
      </div>
      <div className="offset-md-1 input-div2 col-md-10 flexy flexyM mt7">
        <h2>Categories</h2>
        <div className="col-md-3 offset-md-1">
          <input type="text" placeholder="search" />
        </div>
        <p>99 Products</p>
      </div>
      <div className="col-md-10 offset-md-1 flexy">
        <div className="col-md-2 category-selection">
          <ul className="list-unstyled ">
            {suppliersStoreCategories.map((data, index) => (
              <li
                key={index}
                className={` ${category === data.id ? "prd-active" : ""}`}
                onClick={() => setCat(data.id)}
              >
                {data.category}
              </li>
            ))}
          </ul>
        </div>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 col-md-10">
          {" "}
          {filteredProducts.map((data, index) => (
            <Products data={data} />
          ))}
        </div>{" "}
      </div>
      <div className="col-md-10 offset-md-1 mt8">
        <div className="offset-md-2 flexy flexyM col-md-10">
          <div className="prev-btn" style={{ flexGrow: 1 }}>
            <button>Previous</button>
          </div>{" "}
          <div className="num-btn" style={{ flexGrow: 1 }}>
            <button>1</button>

            <button>3</button>

            <button>4</button>
          </div>
          <div className="next-btn">
            <button>Next</button>
          </div>{" "}
        </div>
      </div>
      <div className="col-md-10 offset-md-1 mt5">
        <h2>Brands that may interest you</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};

export default SuppliersStore;