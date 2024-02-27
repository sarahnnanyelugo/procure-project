import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Back2School from "./Back2School";
import "./searched-results.scss";
export default function SearchedResults() {
  const [state, setState] = useState({
    query: "",
    list: BackToSchoo,
  });
  return (
    <>
      <div className="search-nav">
        <Navbar colo="#000" />
      </div>
      <div className="col-md-10 offset-md-1 mt">
        <h2>Result for “back to school”</h2>
        <div className="holder dn">
          {state.list.map((data, index) => (
            <Back2School data={data} />
          ))}
        </div>{" "}
        <div className="holder2">
          {state.list.map((data, index) => (
            <Back2School data={data} />
          ))}
        </div>
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}
