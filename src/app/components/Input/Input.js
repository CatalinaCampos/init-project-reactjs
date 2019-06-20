import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class Input extends Component {
  render() {
    const { size, placeholder } = this.props;
    return (
      <InputGroup size={size}>
        <FormControl
          placeholder={placeholder}
        />
      </InputGroup>
    );
  }
}

export default Input;
 // "basic-addon1"