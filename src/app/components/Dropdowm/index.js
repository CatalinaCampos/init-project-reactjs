import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";

const BasicDropdown = ({ variant, titleDrop, items }) => (
  <Dropdown>
    <Dropdown.Toggle variant={variant} id="dropdown-basic">
      {titleDrop}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {items.map((item) => (
        <Dropdown.Item href={item.path} key={item.key}>
          {item.title}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

BasicDropdown.propTypes = {
  variant: PropTypes.string,
  titleDrop: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

BasicDropdown.defaultProps = {
  variant: "info",
  path: null
};

export default BasicDropdown;
