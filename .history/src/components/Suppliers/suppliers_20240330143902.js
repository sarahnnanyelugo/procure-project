import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import Img from "../../assets/images/ss1.png";
import "./suppliers.scss";
import { GetSupplier } from "../../providers";
export const Suppliers = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [supplier, setSupplier] = useState();
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {" "}
      <div className="col">
        {" "}
        <div className="products-component flexy flexyM">
          <div className="col-md-4  col-4 caru-body">
            <img src={data.img} />
          </div>
          <div className="col-md-6  col-6">
            <p>{data.name}</p>

            <h1>
              ₦{data.minPrice} - ₦{data.maxPrice}
            </h1>

            <p> Minimum order {data.minOrder} sets</p>
            <div className="flexy flexyM">
              <img src={data.img} height="21px" />
              <p>{supplier?.name}</p>
            </div>
          </div>
          <div className="col-md-2 colm3  col-3">
            {/* <center>
              {" "}
              <button>Add to cart</button>
            </center> */}
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
