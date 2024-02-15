import React from "react";
import { Col, Row } from "react-bootstrap";

export const Category = (data) => {
  return (
    <>
      <div className="col">
        <div className="category-component">
          <img src={data.mainImg} width="100%" />
          <Row>
            <Col>
              <small>Category:</small>
            </Col>
            <Col>{data.category}</Col>
          </Row>
          <p>{data.detail}</p>
          <div className="flexy flexyM">
            <img src={data.profileImg} />

            <div>
              <h6>{data.profileName}</h6>
            </div>

            <div>
              <small>{data.location}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
