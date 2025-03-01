import React from "react";
import Slider from "react-slick";
import image1 from '../../../assets/image50.webp'
import image2 from '../../../assets/image51.webp'
import image3 from '../../../assets/image52.gif'
import image4 from '../../../assets/image53.jpg'


function MensHeaderCoursel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear"
  };
  return (
    <div className="slider-container mt-2">
      <Slider {...settings}>
        <div>
          <h3><img src={image1} width='100%'/></h3>
        </div>
        <div>
        <h3><img src={image2} width='100%'/></h3>
        </div>
        <div>
        <h3><img src={image3} width='100%'/></h3>
        </div>
        <div>
        <h3><img src={image4} width='100%'/></h3>
        </div>
      
      </Slider>
    
    </div>
  );
}

export default MensHeaderCoursel;
