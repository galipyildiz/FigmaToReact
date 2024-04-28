import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ text, handleClick }) {
  return <button className="primary-button" onClick={handleClick}>{text}</button>;
}

export default PrimaryButton;
