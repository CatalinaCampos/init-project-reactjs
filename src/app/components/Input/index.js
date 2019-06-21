import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl } from 'react-bootstrap';

const Input = ({ size, placeholder }) => {
  return (
    <InputGroup size={size}>
      <FormControl placeholder={placeholder} />
    </InputGroup>
  );
};

Input.prototype = {
  size: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  size: "sm",
  placeholder: ""
};

export default Input;
