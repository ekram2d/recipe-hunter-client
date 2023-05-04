import React from 'react';
import { Carousel } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Slider = () => {
  return (
    <Carousel className='mt-5'>
      <Carousel.Item>
       
          <img
            className="d-block w-50 mx-auto  img-fluid"
            src="https://hips.hearstapps.com/del.h-cdn.co/assets/17/33/1024x512/landscape-omni-sunset-terrace-opentable-top-100-scenic-2017-1.jpg?resize=1200:*"
            alt="First slide"
          />
       
        <Carousel.Caption>
          <h3>First restuarent</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto img-fluid"
          src="https://cdn0.weddingwire.com/vendor/410459/3_2/640/jpg/63_51_954014-159890484013977.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second Restuarent</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto img-fluid"
          src="https://eventective-media.azureedge.net/2584892_lg.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third Restuarent</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;