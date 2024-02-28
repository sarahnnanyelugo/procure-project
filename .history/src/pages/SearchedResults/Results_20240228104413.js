import React from "react";

function Results({ data }) {
  return (
    <>
      <center>
        <img src={data.productImg} height="116px" width="116px" />
        <h6>{data.supplyName}</h6>
      </center>
    </>
  );
}

export default Results;
