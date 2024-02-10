import React from "react";
import "./testimonial.scss";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../../assets/images/clothe2.png";
import Icon1 from "../../../assets/images/indomie.png";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-div">
        <div className="col-md-10 offset-md-1 ">
          <Carousel fade>
            <Carousel.Item>
              <div className="flexy">
                <div className="col-md-5">
                  <h1>
                    “Love the simplicity of the service and the prompt customer
                    support. We can’t imagine working without it.”
                  </h1>
                  <h6>Grace Mosafejo</h6>
                  <p>Account Officer, Indomie</p>
                </div>
                <div className="col-md-5 offset-md-2">
                  <img src={Img1} width="100%" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
