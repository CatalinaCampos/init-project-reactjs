import React from "react";
import PropTypes from "prop-types";
import {
  ButtonToolbar,
  OverlayTrigger,
  Button,
  Tooltip
} from "react-bootstrap";

const BasicTooltip = ({ direction, text, variant, title }) => (
  <ButtonToolbar>
    <OverlayTrigger
      key={direction}
      placement={direction}
      overlay={<Tooltip>{text}</Tooltip>}
    >
      <Button variant={variant}>{title}</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);

BasicTooltip.propTypes = {
  direction: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string
};

BasicTooltip.defaultProps = {
  variant: "info"
};

export default BasicTooltip;
