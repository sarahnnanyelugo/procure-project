import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import Img from "../../assets/images/ss1.png";
import { GetSupplier } from "../../providers";
export const FavouritesDetails = ({ data }) => {
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
    { transform: "scaleX(-1)" }, // Style for third image
    // Add more styles for more images if needed
  ];

  return (
    <>
      {" "}
      <div className="col">
        {" "}
        <div className="favourites-component flexy flexyM">
          <div className="col-md-  col- caru-body">
            <img src={data.img} className="" />
          </div>
          <div className="mt1 ml2" style={{ flexGrow: 1 }}>
            <p>{data.name}</p>
            <p>
              <span>Verified Supplier</span> •{data.years} years • Located in{" "}
              {data.location}
            </p>
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
