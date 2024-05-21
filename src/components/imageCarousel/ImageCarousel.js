import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import { Header } from '../../global/header/Header';


const ImageCarousel = () => {
  const settings ={
    dots: true,
    infinite: true,
    autoplay:true,
    slidesToShow:1,
    slidesToScroll:1,
    speed:500,
    autoplaySpeed:3000,
    pauseOnHover: false,
  };
    return (
        <div className="image-carousel-container">
      <Header className='header-comp'/>
      <p className="carousel-caption sevillana-regular">Take pleasure in your skin chemistery </p>
      <Slider {...settings}>
        <div>
          <img className='imgScroll' src="images/bg2.jpg" alt="Background 2" />
        </div>
        <div>
          <img className='imgScroll' src="images/bg3.jpg" alt="Background 3" />
        </div>
        <div>
          <img className='imgScroll' src="images/bg5.jpg" alt="Background 5" />
        </div>
      </Slider>
    </div>
   
  )
};
export default ImageCarousel;
