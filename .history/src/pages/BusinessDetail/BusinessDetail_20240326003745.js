import React from "react";
import Icon1 from "../../assets/images/detail-icon.svg";
import "./business-detail.scss";
export const BusinessDetail = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleClick = (index) => {
    setSelectedDiv(index === selectedDiv ? null : index); // toggle the selected div
  };
  return (
    <>
      <center className="mt6 buy-intro">
        <small>Step 2/6</small>
        <h4>Business Details</h4>
        <p>Please choose your main category for product you sell</p>
      </center>
      <div className="col-md-6 offset-md-3 business-detail-div">
        <p>Is your store physical or online?</p>
        <div
          className={`business-detail-div-select flexy flexyM ${
            selectedDiv === 0 ? "selected" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <img src={Icon1} height="24px" width="24px" />
          <p>Physical store</p>
        </div>{" "}
        <div
          className={`business-detail-div-select flexy flexyM ${
            selectedDiv === 0 ? "selected" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <img src={Icon1} height="24px" width="24px" />
          <p>Physical store</p>
        </div>{" "}
        <div
          className={`business-detail-div-select flexy flexyM ${
            selectedDiv === 0 ? "selected" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <img src={Icon1} height="24px" width="24px" />
          <p>Physical store</p>
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
};
