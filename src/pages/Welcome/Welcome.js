import React from "react";
import "./Welcome.css";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

function Welcome() {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    navigate("/home");
  };

  return (
    <div className="background">
      <div className="background-image"></div>
      <div className="login-div">
        <Logo />
        <p className="enjoy-text">Enjoy the newest movies</p>
        <PrimaryButton
          handleClick={(e) => handleLoginClick(e)}
          text={"Log in"}
        />
        <p>
          No account?{" "}
          <a className="sign-up-link" href="#">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
