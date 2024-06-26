import React, { useState } from "react";
import EyeClose from "../../../assets/images/eye-close.svg";
import EyeOpen from "../../../assets/images/eye-open.svg";
import "./password.scss";
export const Password = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input formpassword ">
      <input
        type={showPassword ? "text" : "password"}
        name="name"
        autocomplete="new-password"
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <label for="text" class="label-name">
        <span class="content-name">{props.placeholder}</span>
      </label>
      <span onClick={toggleShowPassword}>
        {showPassword ? (
          <img className="" src={EyeClose} alt="Scholar" height="24px" />
        ) : (
          <img className="" src={EyeOpen} alt="Scholar" height="24px"" />
        )}
      </span>
    </div>
  );
};
