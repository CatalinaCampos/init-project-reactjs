import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class ControlledCarousel extends Component {
  render() {
    const { index, direction } = this.props;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s2.best-wallpaper.net/wallpaper/1680x1050/1107/Squirrel-in-the-grass_1680x1050.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperstock.net/wallpapers/thumbs1/53718wide.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://www.fondox.net/wallpapers/una-ardilla-relajada-2033.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
