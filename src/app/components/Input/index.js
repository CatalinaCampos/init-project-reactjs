import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Input = () => {
    const { size, placeholder } = this.props;
    return (
      <InputGroup size={size}>
        <FormControl placeholder={placeholder} />
      </InputGroup>
    );
  }

export default Input;