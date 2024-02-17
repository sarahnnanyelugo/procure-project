import React from "react";
import { Col, Row } from "react-bootstrap";
import "./rated-suppliers.scss";
export const RatedSuppliers = ({ data }) => {
  return (
    <div className="col">
      <div className="rated-suppliers-div ">
        <div className="flexy flexyM">
          <div className="col-md-4">
            <img src={data.productImg1} />{" "}
          </div>
          <div className="col-md-8">
            <img src={data.productImg2} />{" "}
          </div>
        </div>
        <div class="parentA">
          <div class="divB">
            {" "}
            <img src={data.productImg3} />
          </div>
          <div class="divC">
            <img src={data.productImg4} />{" "}
          </div>
        </div>
        <div className="inner-cont">
          <Row>
            <Col>
              <p>{data.company}</p>
            </Col>

            <Col>
              <img src={data.star} height="11px" />
              <img src={data.star} height="11px" />
              <img src={data.star} height="11px" />
              <img src={data.star} height="11px" />
              <img src={data.star} height="11px" />
              <small>
                {data.rating} <span>{data.followers}</span>
              </small>
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
