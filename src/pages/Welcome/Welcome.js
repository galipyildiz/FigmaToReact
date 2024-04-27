import React from "react";
import "./Welcome.css";
import logo from "../../resources/logo.png";
import PrimaryButton from "../../components/PrimaryButton";

function Welcome() {
  return (
    <div className="background">
      <div className="background-image"></div>
      <div className="login-div">
        <img src={logo} alt="logo" height={32} />
        <p>Enjoy the newest movies</p>
        <PrimaryButton text={"Log in"} />
        <p>
          No account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
