import React from "react";
import { Col, Row } from "react-bootstrap";
import "./rated-suppliers.scss";
export const RatedSuppliers = ({ data }) => {
  return (
    <div classNameName="col">
      <div classNameName="rated-suppliers-div ">
        <div className="parentA">
          <div className="div1">
            <img src={data.Img1} width="100%" />{" "}
          </div>
          <div className="div2">
            <img src={data.Img2} width="100%" />{" "}
          </div>
        </div>
        <div class="parentA">
          <div class="divB">
            {" "}
            <img src={data.Img3} width="100%" />
          </div>
          <div class="divC">
            <img src={data.Img4} width="100%" />{" "}
          </div>
        </div>
        <Row>
          <Col>
            <p>TechGadgets Ltd</p>
          </Col>
          <Col></Col>
        </Row>{" "}
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </div>
    </div>
  );
};
