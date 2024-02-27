import React from "react";

function Back2School({ data }) {
  return (
    <>
      <center>
        <img src={data.productImg} />
        <h6>{data.productName}</h6>
      </center>
    </>
  );
}

export default Back2School;
