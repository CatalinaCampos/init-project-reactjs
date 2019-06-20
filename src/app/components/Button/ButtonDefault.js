import React, { Component } from "react";
import { Button } from "react-bootstrap";

class ButtonDefault extends Component {
  render() {
    const { name, variantType, size } = this.props;
    return (
      <Button variant={variantType} size={size}>
        {name}
      </Button>
    );
  }
}

export default ButtonDefault;
