import React from "react";
import Slider from "react-slick";
import image1 from '../../assets/image1.webp'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.gif'
import image4 from '../../assets/image4.jpg'
import '../../App.css'
import image5 from'../../assets/image5.webp'
import Tittle from "./tittle";


function Coursel() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
      <Tittle/>
    <img src={image5} className="image1" width='100%' />

    <Tittle/>
    </div>
  );
}

export default Coursel;
