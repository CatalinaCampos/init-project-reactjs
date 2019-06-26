import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

const BasicDropdown = ({ variant, title, items }) => (
  <div style={{ display: 'flex' }}> 
  <Dropdown>
    <Dropdown.Toggle variant={variant} id='dropdown-basic'>
      {title}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {items.map((item) => (
        <Dropdown.Item href={item.path} key={item.key}>{item.title}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  </div>
);

BasicDropdown.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

BasicDropdown.defaultProps = {
  variant: 'info'
};

export default BasicDropdown;
