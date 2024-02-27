import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";

export const ResultDetails = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {" "}
      <div className="col">
        {" "}
        <div className="products-component flexy flexyM">
          <div className="col-md-4  col-4">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <h1>1</h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1>2</h1>
              </Carousel.Item>
              <Carousel.Item>
                <h1>3</h1>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6  col-6">
            {/* <p>{data.productName}</p> */}
            <p>
              Supercute Waterproof Mochila Infantil Book Bag Back To School Kid
              Backpack Shoulder Bag Kids School Bag For Children
            </p>
            {/* <h1>{data.priceRange}</h1> */}
            <h1>₦900 - ₦1000</h1>
            {/* <small>{data.minOrder}</small> */}
            <small>Minimum order: 50 sets</small>
          </div>
          <div className="col-md-2 colm3  col-3">
            <center>
              {" "}
              <button>Add to cart</button>
            </center>
            <center>
              {" "}
              <button>Chat now</button>
            </center>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
