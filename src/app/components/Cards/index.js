import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardGroup } from "react-bootstrap";

//size problem
const BasicCard = ({size, titleBtn, title, src, variantImg, text, variantBtn, subtitle, path, colorText, colorCard, colorBorder}) => (
    <Card bg={colorCard} text={colorText} style={{ width: size }} border={colorBorder}>
    {src ? (<Card.Img variant={variantImg} src={src}/>) : (<Card.Img variant={variantImg} />) }
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {subtitle ? (<Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>) : false }
      <Card.Text>
        {text}
      </Card.Text>
      {titleBtn ? (<Button variant={variantBtn} href={path}>{titleBtn}</Button>) : false }
    </Card.Body>
  </Card>
);

BasicCard.prototype = {
  size: PropTypes.string,
  titleBtn: PropTypes.string,
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  variantImg: PropTypes.string,
  text: PropTypes.string.isRequired,
  variantBtn: PropTypes.string,
  subtitle: PropTypes.string,
  path: PropTypes.string,
  colorText: PropTypes.string,
  colorCard: PropTypes.string,
  colorBorder: PropTypes.string
};

BasicCard.defaultProps = {
  size: '18rem',
  titleBtn: '',
  src: '',
  variantImg: '',
  variantBtn: '',
  subtitle: '',
  path: '',
  colorText: 'black',
  colorCard: 'light',
  colorBorder: ''
};

const CardsGroup = ({}) => (
  <CardGroup>
{/* MAP */}
  <Card>
    <Card.Img variant="top" src={src} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardGroup>
)

export { BasicCard, CardsGroup };
