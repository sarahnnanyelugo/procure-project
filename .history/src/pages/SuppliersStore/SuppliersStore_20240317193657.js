import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Hastletop from "../../assets/images/hastletop.png";
import Icon from "../../assets/images/export-icon.png";

import "./suppliers-store.scss";
import FilterOffcanvas from "../SearchedResults/FilterOffcanvas";
import { suppliersStoreCategories, supplierStoreData } from "../../TestData";
import { Deals } from "../../components/Deals/Deals";
const SuppliersStore = () => {
  const [category, setCategory] = useState("*");
  const [filteredProducts, setFilteredProducts] = useState(supplierStoreData);
  function setCat(cat) {
    setCategory(cat);
  }
  useEffect(() => {
    if (category === "*") {
      setFilteredProducts(supplierStoreData);
    } else {
      setFilteredProducts(
        supplierStoreData.filter((prd) => prd.category.indexOf(category) !== -1)
      );
    }
  }, [category]);
  const [state, setState] = useState({
    query: "",
    list: supplierStoreData,
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
        <div className="col-md-3 category-selection">
          <ul className="list-unstyled ">
            {suppliersStoreCategories.map((data, index) => (
              <li
                key={index}
                className={`btn ${category === "newBrand" ? "prd-active" : ""}`}
                onClick={() => setCat("")}
              >
                {data.category}
              </li>
            ))}
          </ul>
        </div>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 col-md-9">
          {" "}
          {state.list.map((data, index) => (
            <Deals data={data} />
          ))}
        </div>{" "}
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};

export default SuppliersStore;
