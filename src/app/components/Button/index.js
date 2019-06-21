import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ButtonDefault = ({ name, variant, size, path }) => {
  return (
    <Button variant={variant} size={size} href={path}>
      {name}
    </Button>
  );
};

ButtonDefault.prototype = {
  variant: PropTypes.string,
  size: PropTypes.string,
  path: PropTypes.string,
  name: PropTypes.string.isRequired
};

ButtonDefault.defaultProps = {
  variant: 'outline-info',
  size: 'sm',
  path: ''
};

export default ButtonDefault;