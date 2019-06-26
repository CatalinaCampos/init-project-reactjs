import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';

const BadgeWithText = ({ text, variant, title }) => (
  <div style={{ display: 'flex' }}> 
  <p>
    {text}
    <Badge variant={variant}>{title}</Badge>
  </p>
  </div>
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
  <div style={{ display: 'flex' }}> 
  <Button variant={variantBtn}>
    {text} <Badge variant={variantBadge}>{counter}</Badge>
  </Button>
  </div>
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

const BadgeAlone = ({ variant, title }) => (
  <div style={{ display: 'flex' }}> 
  <Badge variant={variant}>{title}</Badge>
  </div>
);

BadgeAlone.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string
};

BadgeAlone.defaultProps = {
  variant: 'info'
};

const Pills = ({ variant, title }) => (
  <div style={{ display: 'flex' }}> 
  <Badge pill variant={variant}>
    {title}
  </Badge>
  </div>
);

Pills.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string.isRequired
};

Pills.defaultProps = {
  variant: 'info'
};

export { BadgeWithText, BadgeWithCounter, BadgeAlone, Pills };
