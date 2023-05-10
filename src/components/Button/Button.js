import React from "react";
import PropTypes from "prop-types";
import "./Button.scss"; // import the component's stylesheet
import button from "../../assets/Button.png";

function Button({ onClick, disabled }) {
  return (
    <button
      type="button"
      className="spike-button"
      onClick={onClick}
      disabled={disabled}
    >
      {/* Replace myButtonImage.png with the filename of your image */}
      <span
        className="spike-button__label"
        style={{ backgroundImage: `url(${button})` }}
      >
        Submit
      </span>
    </button>
  );
}

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  disabled: false,
};

export default Button;
