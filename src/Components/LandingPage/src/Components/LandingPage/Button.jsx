import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  onClick,
  label,
  type = "button",
  className = "",
  style = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      style={style}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired, // Text for the button
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
