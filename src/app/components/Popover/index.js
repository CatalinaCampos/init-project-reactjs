import React from 'react';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

const BasicPopover = ({
  body,
  title,
  direction,
  titleBtn,
  variantBtn,
  ...props
}) => {
  const popover = (
    <Popover id='popover-basic' title={title}>
      {body}
    </Popover>
  );
  return (
    <OverlayTrigger trigger='click' placement={direction} overlay={popover}>
      <Button variant={variantBtn} {...props}>
        {titleBtn}
      </Button>
    </OverlayTrigger>
  );
};

BasicPopover.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string.isRequired,
  direction: PropTypes.string,
  titleBtn: PropTypes.string.isRequired,
  variantBtn: PropTypes.string
};

BasicPopover.defaultProps = {
  body: null,
  direction: 'bottom',
  variantBtn: 'info'
};

export default BasicPopover;
