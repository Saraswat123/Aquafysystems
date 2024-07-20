import React from 'react'
import Slider from 'react-slick';
import './tech.css'
import Image1 from './Pics/Slide1.jpeg';
import Image2 from './Pics/Slide2.jpeg';
import Image3 from './Pics/Slide3.jpeg';
import Image4 from './Pics/Slide4.jpeg';
import Image5 from './Pics/Slide5.jpeg';

const Tech = React.forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
   <section ref={ref} className="tech responsive">
    <h1 className="textHeading">Technology</h1>
    <div className="picBox">
    <Slider {...settings}>
          <img src={Image1} alt="Image 1" className='tImage' />
          <img src={Image2} alt="Image 1" className='tImage' />
          <img src={Image3} alt="Image 1" className='tImage' />
          <img src={Image4} alt="Image 1" className='tImage' />
          <img src={Image5} alt="Image 1" className='tImage' />
        </Slider>
    </div>
   </section>
  )
})

export default Tech