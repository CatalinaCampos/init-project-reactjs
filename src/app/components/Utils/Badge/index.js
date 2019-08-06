import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';

const BadgeWithText = ({ text, variant, title }) => (
  <p>
    {text}
    <Badge variant={variant}>{title}</Badge>
  </p>
);

BadgeWithText.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  title: PropTypes.string.isRequired
};

BadgeWithText.defaultProps = {
  variant: 'info'
};

const BadgeWithCounter = ({ variantBtn, text, variantBadge, counter }) => (
  <Button variant={variantBtn}>
    {text} <Badge variant={variantBadge}>{counter}</Badge>
  </Button>
);

BadgeWithCounter.propTypes = {
  text: PropTypes.string.isRequired,
  variantBadge: PropTypes.string,
  variantBtn: PropTypes.string,
  counter: PropTypes.string.isRequired
};

BadgeWithCounter.defaultProps = {
  variantBadge: 'info',
  variantBtn: 'light'
};

export { BadgeWithText, BadgeWithCounter };
