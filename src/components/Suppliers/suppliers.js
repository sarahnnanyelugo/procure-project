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
        <div className="suppliers-component flexy flexyM">
          <div className="col-md-4  col-4 caru-body">
            <img src={data.img} />
          </div>
          <div className="col-md-6  col-6">
            <div className="flexy flexyM">
              <h5>{data.name}</h5>| <p>{data.category}</p>
            </div>

            <div className="flexy flexyM">
              <h6>Verified Supplier </h6>
              <p>
                • {data.years} • Located in {data.location}
              </p>
            </div>
          </div>
          <div className="col-md-2 colm3  col-3">
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
