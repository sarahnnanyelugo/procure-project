import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import Img from "../../assets/images/ss1.png";
export const ResultDetails = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [supplier, setSupplier] = useState();
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    setSupplier(supplier_id);
  });
  return (
    <>
      {" "}
      <div className="col">
        {" "}
        <div className="products-component flexy flexyM">
          <div className="col-md-4  col-4">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img src={Img} width="100%" />
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
            <p>{data.name}</p>

            <h1>
              ₦{data.minPrice} - ₦{data.maxPrice}
            </h1>

            <p> Minimum order {data.minOrder} sets</p>
            <div className="flexy flexyM">
              <img src={data.img} />
              <p>{data.supplier}</p>
            </div>
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
