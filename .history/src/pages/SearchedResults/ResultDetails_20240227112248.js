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
          <div className="col-md-4 com1 col-4">
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
          <div className="col-md-6 com2 col-6">
            {/* <p>{data.productName}</p> */}
            <p></p>
            <h1>{data.priceRange}</h1>
            <small>{data.minOrder}</small>
          </div>
          <div className="col-md-2 com3 col-3">
            <button>Add to cart</button>
            <button>Chat now</button>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
