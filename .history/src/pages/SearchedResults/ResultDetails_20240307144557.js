import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import Img from "../../assets/images/ss1.png";
import { GetSupplier } from "../../providers";
export const ResultDetails = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [supplier, setSupplier] = useState();
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    setSupplier(GetSupplier(data.supplier_id));
  }, []);
  const imageStyles = [
    { transform: " none" }, // Style for first image

    { transform: "rotate(10deg) " }, // Style for third image
    { transform: " rotate(-15deg)" }, // Style for third image
    // Add more styles for more images if needed
  ];

  return (
    <>
      {" "}
      <div className="col">
        {" "}
        <div className="products-component flexy flexyM">
          <div className="col-md-4  col-4">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {data.images.map((img, index) => (
                <Carousel.Item>
                  <img src={img} style={imageStyles[index]} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-6  col-6">
            <p>{data.name}</p>

            <h1>
              ₦{data.minPrice} - ₦{data.maxPrice}
            </h1>

            <p> Minimum order {data.minOrder} sets</p>
            <div className="flexy flexyM">
              <img src={data.img} width="21px" height="21px" />
              <p>{supplier?.name}</p>
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
