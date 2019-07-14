import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LinkButton = ({ text, to, ...props }) => (
  <Link to={to}>
    <Button {...props}>{text}</Button>
  </Link>
);

LinkButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired
};

LinkButton.defaultProps = {
  path: null
};

export default LinkButton;
