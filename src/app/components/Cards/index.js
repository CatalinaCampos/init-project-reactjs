import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, CardDeck } from 'react-bootstrap';

const BasicCard = ({
  size,
  titleBtn,
  title,
  src,
  direction,
  text,
  variantBtn,
  subtitle,
  path,
  colorText,
  colorCard,
  colorBorder
}) => (
  <Card
    bg={colorCard}
    text={colorText}
    style={{ width: size }}
    border={colorBorder}
  >
    {src ? (
      <Card.Img variant={direction} src={src} />
    ) : (
      <Card.Img variant={direction} />
    )}
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {subtitle ? (
        <Card.Subtitle className='mb-2 text-muted'>{subtitle}</Card.Subtitle>
      ) : (
        false
      )}
      <Card.Text>{text}</Card.Text>
      {titleBtn ? (
        <Button variant={variantBtn} href={path}>
          {titleBtn}
        </Button>
      ) : (
        false
      )}
    </Card.Body>
  </Card>
);

BasicCard.prototype = {
  size: PropTypes.string,
  titleBtn: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  direction: PropTypes.string,
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
  direction: 'top',
  variantBtn: 'info',
  path: null,
  colorText: 'black',
  colorCard: 'light',
  colorBorder: null
};

const CardsGroupNoMargin = ({ items }) => (
  <CardGroup>
    {items.map((item) => (
      <Card key={item.key}>
        <Card.Img variant={item.position} src={item.src} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          {item.text ? <Card.Text>{item.text}</Card.Text> : false}
        </Card.Body>
        {item.footer ? (
          <Card.Footer>
            <small className='text-muted'>{item.footer}</small>{" "}
          </Card.Footer>
        ) : (
          false
        )}
      </Card>
    ))}
  </CardGroup>
);

CardsGroupNoMargin.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      footer: PropTypes.string,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

CardsGroupNoMargin.defaultProps = {
  position: 'top'
};

const CardsGroupMargin = ({ items }) => (
  <CardDeck>
    {items.map((item) => (
      <Card key={item.key}>
        <Card.Img variant={item.position} src={item.src}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          {item.text ? <Card.Text>{item.text}</Card.Text> : false}
        </Card.Body>
        {item.footer ? (
          <Card.Footer>
            <small className='text-muted'>{item.footer}</small>
          </Card.Footer>
        ) : (
          false
        )}
      </Card>
    ))}
  </CardDeck>
);

CardsGroupMargin.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      footer: PropTypes.string,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

CardsGroupMargin.defaultProps = {
  position: 'top'
};

export { BasicCard, CardsGroupNoMargin, CardsGroupMargin };
