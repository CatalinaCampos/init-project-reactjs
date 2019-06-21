import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = ({ index, direction, items }) => {
  return (
    <Carousel activeIndex={index} direction={direction}>
      {items.map((item) => (
        <Carousel.Item>
          <img className='d-block w-100' src={item.image} alt='' />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
