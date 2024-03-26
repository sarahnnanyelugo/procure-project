import { useEffect, useState } from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./educare-packages.scss";

import { CompareFeatures } from "./CompareFeatures/CompareFeatures";
import FAQAccordion from "../../components/FAQAccordion/FAQAccordion";
import { Partners } from "../../components/Partners/Partners";
import Axios from "axios";
import FAQAccordionBlue from "../../components/FAQAccordionBlue/FAQAccordionBlue";
import BusinessPackage from "./BusinessPackage";
import SchoolsPackages from "../EducareSchoolPackages/Schoolspackages";

function EducarePackages(props) {
  const [activeIndex, setActiveIndex2] = useState(1);
  const handleClick2 = (index) => setActiveIndex2(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="col-md-12 nav-two-business col-12 "> </div>

      <div className="business-pricing-tab ">
        {" "}
        <div className="tabs offset-md-5">
          <button
            className={`tab ${checkActive2(1, "active2")}`}
            onClick={() => handleClick2(1)}
          >
            Business
          </button>
          <button
            className={`tab ${checkActive2(2, "active2")}`}
            onClick={() => handleClick2(2)}
            style={{ marginLeft: "20px" }}
          >
            School
          </button>
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>1</div>
          <div className={`panel ${checkActive(2, "active2")}`}>2</div>
        </div>
      </div>
    </>
  );
}

export default EducarePackages;
