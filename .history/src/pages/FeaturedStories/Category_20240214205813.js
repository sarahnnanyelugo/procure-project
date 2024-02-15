import React from "react";
import { Col, Row } from "react-bootstrap";

export const Category = (data) => {
  return (
    <>
      <div className="col">
        <div className="category-component">
          <img src={data.MainImg} width="100%" />
          <Row>
            <Col>
              <small>Category:</small>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
    </>
  );
};
