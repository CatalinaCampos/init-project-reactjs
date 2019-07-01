import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Image } from "react-bootstrap";

const Images = ({ src, ...props }) => (
  <Row>
    <Col>
      <Image src={src} {...props} />
    </Col>
  </Row>
);

Images.propTypes = {
  src: PropTypes.string.isRequired
};

const ImageFluid = ({ src }) => <Image src={src} fluid />;

ImageFluid.propTypes = {
  src: PropTypes.string.isRequired
};

export { Images, ImageFluid };
