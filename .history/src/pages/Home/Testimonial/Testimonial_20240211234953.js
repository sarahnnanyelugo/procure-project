import React from "react";
import "./testimonial.scss";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../../assets/images/necklace.png";
import Img2 from "../../../assets/images/canon2.png";
import Icon1 from "../../../assets/images/indomie.png";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-div  <div className="col-md-10 offset-md-1 mission-div flexy ">
        <div className="col-md-7">
          <h6>Our Mission</h6>
          <p className="col-md-10 col-9">
            Provide businesses with a more cost effective, time saving and
            efficient way to carry out procurement.
          </p>
        </div>
        <div className="col-md-5"></div>
      </div>">
        <div className="col-md-10 offset-md-1 ">
          <Carousel fade>
            <Carousel.Item>
              <div className="flexy">
                <div className="col-md-5">
                  <img src={Icon1} width="15%" />
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
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="flexy">
                <div className="col-md-5">
                  <img src={Icon1} width="15%" />
                  <h1>
                    “As a small business owner, finding EYZ sourcing for bulk
                    orders has been a game-changer.”
                  </h1>
                  <h6>John Sanguine</h6>
                  <p>Procurement Officer</p>
                </div>
                <div className="col-md-5 offset-md-2">
                  <img src={Img2} width="100%" />
                </div>
              </div>
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="flexy">
                <div className="col-md-5">
                  <img src={Icon1} width="15%" />
                  <h1>
                    “Running an e-commerce business requires reliable suppliers,
                    and we found just that. This has given our brand a
                    competitive edge.
                  </h1>
                  <h6>Mike Labadi</h6>
                  <p>Facilities Coordinator</p>
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
