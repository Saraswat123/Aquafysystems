import React from 'react'
import './aboutus.css'
import Water from './water.png'

const AboutUs = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="aboutUs">
      <div className="picture">
          <img src={Water} alt="Water" />
      </div>
      <div className="content">
        <h1 className="heading">About Us</h1>
        <p className="para">Welcome to AquafySystems Technology. We are dedicated to solving the water crisis by introducing our innovative greywater treatment model for households. Our mission is to reduce fresh water dependency and promote sustainable water use for a better future. Where sustainability meets impact.</p>
      </div>
      
    </section>
  )
})

export default AboutUs