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
        <div className="inner-cont">
          <Row>
            <Col>
              <p>{data.company}</p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <small>
                    {data.rating} <span>{data.follower}</span>
                  </small>
                </Col>
              </Row>
            </Col>
          </Row>{" "}
          <Row>
            <Col md={8}>
              <small>{data.productCategory}</small>
            </Col>
            <Col md={4}>
              <small>{data.productQty} Products</small>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
