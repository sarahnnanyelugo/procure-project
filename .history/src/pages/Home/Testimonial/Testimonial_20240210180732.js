import React from "react";
import "./testimonial.scss";
import Carousel from "react-bootstrap/Carousel";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-div">
        <div className="col-md-10 offset-md-1 ">
          <Carousel fade>
            <Carousel.Item></Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
