import React from "react";
import "./supplier-form.scss";
import FormIcon1 from "../../assets/images/form-icon1.svg";

export const SupplierForm = () => {
  return (
    <>
      <div className="flexy ">
        <div className="col-md-5 form-bg">
          <div className="col-md-8 offset-md-2">
            <div className="flexy flexyM">
              <img src={formIcon1} height="42px" width="42px" />
              <h5>Access to a Diverse Customer Base</h5>
              <p>
                Get exposure to a broad and diverse customer base, increasing
                the potential for your products to reach a wide audience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="prefooter-div col-md-8 offset-md-2 col-10 offset-1">
        <center>
          <h2>Ready to get started?</h2>
          <p>Register now to browse millions of goods from vetted vendors.</p>
          <button className="app-btn">Get started</button>
        </center>
      </div>
    </>
  );
};
