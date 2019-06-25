import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = ({ items }) => (
  <Carousel>
    {items.map((item) => (
      <Carousel.Item key={item.key}>
        <img className='d-block w-100' src={item.image} alt='' />
        <Carousel.Caption>
          {item.title ? <h3>{item.title}</h3> : false}
          {item.subtitle ? <p>{item.subtitle}</p> : false}
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

ControlledCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ControlledCarousel;
