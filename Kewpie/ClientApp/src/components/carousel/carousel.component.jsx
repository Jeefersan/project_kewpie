import React from 'react';

import { images } from './carousel.data.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as CarouselComponent } from 'react-responsive-carousel';

const Carousel = () => (
  <CarouselComponent
    autoPlay
    swipeable
    stopOnHover
    infiniteLoop
    showThumbs={false}
    interval={5000}
  >
    {images.map((img) => (
      <div key={img.id}>
        <img alt='' src={img.src} />
      </div>
    ))}
  </CarouselComponent>
);

export default Carousel;
