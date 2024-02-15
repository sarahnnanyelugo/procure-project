import React from "react";
import { Col, Row } from "react-bootstrap";
import "./featured-stories.scss";
export const Category = ({ data }) => {
  return (
    <>
      <div className="col">
        <div className="category-component">
          <img src={data.mainImg} width="100%" />
          <Row>
            <Col sm={6} md={3}>
              <small>Category:</small>
            </Col>
            <Col>
              <img src={data.categoryIcon} height="15px" width="15px" />
              <h6>{data.category}</h6>
            </Col>
          </Row>
          <p>{data.detail}</p>
          <div className="flexy flexyM">
            <img src={data.profileImg} height="30px" width="30px" />

            <div>
              <h6>{data.profileName}</h6>
              <small>{data.position}</small>
              <small>{data.companyName}</small>
            </div>

            <div style={{ float: "right" }}>
              <small>{data.location}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
