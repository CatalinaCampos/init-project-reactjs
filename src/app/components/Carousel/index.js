import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ControlledCarousel extends Component {
  render() {
    const { index, direction, items } = this.props;
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
  }
}

export default ControlledCarousel;