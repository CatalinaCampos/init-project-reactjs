import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ButtonDefault extends Component {
  render() {
    const { name, variantType, size, path } = this.props;
    return (
      <Button variant={variantType} size={size} href={path}>
        {name}
      </Button>
    );
  }
}

export default ButtonDefault;