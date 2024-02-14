import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./featured-stories.scss";
export const FeaturedStories = () => {
  return (
    <>
      <div className="nav-displayer">
        <Navbar colo="#fff" />
      </div>
      <div className="featured-stories-div">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
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
