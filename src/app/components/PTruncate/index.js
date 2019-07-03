import PropTypes from "prop-types";
import React from "react";

const PTruncate = ({ text, maxLength }) => (
  <div>
    {text.length > maxLength ? text.substr(0, maxLength) + "..." : text}
  </div>
);

PTruncate.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired
};

export default PTruncate;
