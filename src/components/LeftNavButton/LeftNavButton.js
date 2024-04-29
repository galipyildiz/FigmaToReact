import "./LeftNavButton.css";

function LeftNavButton({ text, icon, isActive }) {
  return (
    <button className={`nav-button ${isActive ? "nav-button-active" : ""}`}>
      <img
        className={!isActive ? "nav-button-icon" : ""}
        src={icon}
        height={24}
        alt="logo"
      />
      <span className="nav-button-text">{text}</span>
    </button>
  );
}

export default LeftNavButton;
