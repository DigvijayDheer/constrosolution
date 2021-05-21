import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img/hero-1.jpg'
import img2 from '../assets/img/hero-2.jpg'
import img3 from '../assets/img/hero-3.jpg'
import img4 from '../assets/img/hero-4.jpg'

const ProductCarousel = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default ProductCarousel
