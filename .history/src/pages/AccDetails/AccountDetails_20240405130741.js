import React from "react";

function AccountDetails() {
  return (
    <>
      <h3>Account Details</h3>
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active2")}`}
          onClick={() => handleClick(1)}
        >
          All order
        </button>
        <button
          className={`tab ${checkActive(2, "active2")}`}
          onClick={() => handleClick(2)}
        >
          Pending
        </button>
        <button
          className={`tab ${checkActive(3, "active2")}`}
          onClick={() => handleClick(3)}
        >
          Completed
        </button>{" "}
        <button
          className={`tab ${checkActive(4, "active2")}`}
          onClick={() => handleClick(4)}
        >
          Canceled
        </button>{" "}
      </div>
      <div style={{ height: "300px" }} />
    </>
  );
}

export default AccountDetails;
