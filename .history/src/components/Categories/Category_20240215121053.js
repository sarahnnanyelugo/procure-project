import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import "/../featured-stories.scss";
export const Category = ({ data }) => {
  const [blogId, setBlogId] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setBlogId(data.id);
  });
  return (
    <>
      <Link
        className="col blog-link"
        to={"/blog/success-stories" + data.id}
        state={{ blog_id: blogId }}
      >
        <div className="category-component ">
          <div className="zoom">
            <img src={data.mainImg} width="100%" className="main-img" />
            <Row>
              <Col sm={6} md={2}>
                <small>Category:</small>
              </Col>
              <Col sm={6} md={9}>
                <h6>
                  {" "}
                  <img src={data.categoryIcon} height="15px" width="15px" />
                  {data.category}
                </h6>
              </Col>
            </Row>
            <p>{data.detail}</p>
            <div className="flexy flexyM">
              <img
                src={data.profileImg}
                height="30px"
                width="30px"
                className="profile-img"
              />

              <div style={{ flexGrow: 1 }}>
                <h5>{data.profileName}</h5>
                <small>{data.position}</small>
                <br />
                <small>{data.companyName}</small>
              </div>

              <div style={{ float: "right" }}>
                <small>{data.location}</small>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
