import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';

const ButtonDefault = ({ name, variant, size, path, ...props }) => (
  <div style={{ display: 'flex' }}> 
  <Button variant={variant} size={size} href={path} {...props}>
    {name}
  </Button>
  </div>
);

ButtonDefault.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  path: PropTypes.string,
  name: PropTypes.string.isRequired
};

ButtonDefault.defaultProps = {
  variant: 'outline-info',
  size: 'sm',
  path: null
};

const BtnGroup = ({ items }) => (
  <ButtonGroup>
    {items.map((item) => (
      <Button variant={item.variant} key={item.key}>{item.title}</Button>
    ))}
  </ButtonGroup>
);

BtnGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.string,
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

BtnGroup.defaultProps = {
  variant: 'info'
};

export { ButtonDefault, BtnGroup };
