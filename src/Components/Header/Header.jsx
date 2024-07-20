import React from 'react'
import FixedBackground from '../../Background/Background'
import './header.css'

const Header = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className='home'>
      <FixedBackground/>
      <div className="overlay">
        <div className="homeContent container">
          <div className="textDiv">
            <h1 className='largeText'>Innovative Greywater Filtration System</h1>
            <span className='smallText'> A Sustainable Solution for Water Reuse, where innovation meet impact.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Header;