import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

const Images = ({ src, ...props }) => (
  <Row>
    <Col xs={6} md={4}>
      <Image src={src} {...props} />
    </Col>
  </Row>
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
