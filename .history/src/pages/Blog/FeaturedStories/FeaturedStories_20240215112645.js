import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "./featured-stories.scss";
import Banner from "../../../assets/images/story-merge.png";
import { categories, categoriesData } from "../../../TestData";
import { Category } from "./Category";

export const FeaturedStories = () => {
  const [state, setState] = useState({
    query: "",
    list: categories,
    list2: categoriesData,
  });
  return (
    <>
      <div className="nav-displayer">
        <Navbar colo="#fff" />
      </div>
      <div className="featured-stories-div">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6">
            <h6>Featured stories</h6>
            <h1>Businesses who has trusted us so far</h1>
          </div>
          <div className="col-md-5 offset-md-1">
            <img src={Banner} width="100%" />
          </div>
        </div>
      </div>

      <div className="col-md-10 offset-md-1 flexy category-section mt8">
        <div className="col-md-4 check-options">
          <h6>Categories</h6>
          {state.list.map((data, index) => (
            <form>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1" className="cat-label">
                {" "}
                {data}
              </label>
              <hr />
            </form>
          ))}
        </div>
        <div className="col-md-8 catt-div">
          <input type="text" placeholder="Search stories" />
          <div className=" row row-cols-1 row-cols-lg-2 g-2 g-lg-3 ">
            {" "}
            {state.list2.map((data, index) => (
              <Category data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
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
