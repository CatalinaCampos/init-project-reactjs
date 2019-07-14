import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "react-bootstrap";

const DefaultButton = ({ text, ...props }) => (
  <Button {...props}>{text}</Button>
);

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired
};

const BtnGroup = ({ items }) => (
  <ButtonGroup>
    {items.map(item => (
      <Button variant={item.variant} key={item.key} size={item.size}>
        {item.title}
      </Button>
    ))}
  </ButtonGroup>
);

BtnGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.string,
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      size: PropTypes.string
    })
  ).isRequired
};

BtnGroup.defaultProps = {
  variant: "info",
  size: "md"
};

export { DefaultButton, BtnGroup };
