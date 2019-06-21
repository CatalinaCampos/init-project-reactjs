import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonDefault = ({name, variantType, size, path}) =>  {
    return (
      <Button variant={variantType} size={size} href={path}>
        {name}
      </Button>
    );
  }

export default ButtonDefault;