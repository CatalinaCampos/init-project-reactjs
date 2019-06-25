import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonToolbar,
  OverlayTrigger,
  Button,
  Tooltip
} from 'react-bootstrap';

const BasicTooltip = ({ items }) => (
  <ButtonToolbar>
    {items.map((item) => (
      <OverlayTrigger
        key={item.direction}
        placement={item.direction}
        overlay={<Tooltip>{item.text}</Tooltip>}
      >
        <Button variant={item.variant}>{item.title}</Button>
      </OverlayTrigger>
    ))}
  </ButtonToolbar>
);

BasicTooltip.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      direction: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      variant: PropTypes.string,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

BasicTooltip.defaultProps = {
  variant: 'info'
};

export default BasicTooltip;
