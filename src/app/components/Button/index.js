import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "react-bootstrap";

const ButtonDefault = ({ name, variant, size, path, ...props }) => (
  <Button variant={variant} size={size} href={path} {...props}>
    {name}
  </Button>
);

ButtonDefault.prototype = {
  variant: PropTypes.string,
  size: PropTypes.string,
  path: PropTypes.string,
  name: PropTypes.string.isRequired,
  state: PropTypes.string
};

ButtonDefault.defaultProps = {
  variant: "outline-info",
  size: "sm",
  path: "",
  state: ""
};

const BtnGroup = ({ items }) => (
  <ButtonGroup>
    {items.map((item) => (
      <Button variant={item.variant}>{item.title}</Button>
    ))};
  </ButtonGroup>
);

BtnGroup.prototype = {
  items: PropTypes.arrayOf(PropTypes.shape({
    variant: PropTypes.string,
    title: PropTypes.string.isRequired
  })).isRequired
};

BtnGroup.defaultProps = {
  variant: 'info'
};

export { ButtonDefault, BtnGroup };
