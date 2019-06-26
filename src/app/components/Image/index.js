import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

const Images = ({ src, ...props }) => (
  <div style={{ display: 'flex' }}> 
  <Row>
    <Col>
      <Image src={src} {...props} />
    </Col>
  </Row>
  </div>
);

Images.protoTypes = {
    src: PropTypes.string.isRequired
};

const ImageFluid = ({ src }) => (
    <Image src={src} fluid />
);

ImageFluid.protoTypes = {
    src: PropTypes.string.isRequired
};

export { Images, ImageFluid };
