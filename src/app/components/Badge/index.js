import React from "react";
import PropTypes from "prop-types";
import { Badge, Button } from "react-bootstrap";

//Tip:
const BadgeWithText = ({ text, variant, title }) => (
  <p>
    {text}
    <Badge variant={variant}>
      {title}
    </Badge>
  </p>
);

BadgeWithText.prototype = {
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
    {/* <span className="sr-only">unread messages</span> */}
  </Button>
);

BadgeWithText.prototype = {
  text: PropTypes.string.isRequired,
  variantBadge: PropTypes.string,
  variantBtn: PropTypes.string,
  counter: PropTypes.string.isRequired
};

BadgeWithText.defaultProps = {
  variantBadge: 'info',
  variantBtn: 'link',
};

const BadgeAlone = ({variant, title}) => (
  <Badge variant={variant}>{title}</Badge>
)

BadgeAlone.prototype = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string
};

BadgeAlone.defaultProps = {
  variantBadge: 'info',
  variantBtn: 'link',
};

const Pills = ({variant, title}) => ( 
  <Badge pill variant={variant}>
    {title}
  </Badge>
);



export { BadgeWithText, BadgeWithCounter, BadgeAlone, Pills };
