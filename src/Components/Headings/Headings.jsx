import React from 'react'
import './headings.css'
import H1Image from './Images/H1.png';
import H2Image from './Images/H2.png';
import H3Image from './Images/H3.png';
import H4Image from './Images/H4.png';
import H5Image from './Images/H5.png';
import H6Image from './Images/H6.png';
import FixedBackground from '../../Background/Background';

const Headings = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="headings">
      <FixedBackground/>
        <div className="headingList">
          <ul className="listItems">
          <li className="items">
              <img className='Image' src={H1Image} alt="H1" />
              <h2 className="para">Utilizes a multistage process to ensure thorough greywater treatment.
              </h2>
            </li>
            <li className="items">
              <img className='Image' src={H2Image} alt="H2" />
              <h2 className="para">Integrates advanced technology, including smart monitoring systems providing real-time water quality data.
              </h2>
            </li>
            <li className="items">
              <img className='Image' src={H3Image} alt="H3" />
              <h2 className="para">Dedicated alert system for notifying users of issues or maintenance.
              </h2>
            </li>
            <li className="items">
              <img className='Image' src={H4Image} alt="H4" />
              <h2 className="para">Designed for versatile, suitable for non-potable uses.
              </h2>
            </li>
            <li className="items">
              <img className='Image' src={H5Image} alt="H5" />
              <h2 className="para">Easy to install and customize, suitable for a wide range of users and settings.
              </h2>
            </li>
            <li className="items">
              <img className='Image' src={H6Image} alt="H6" />
              <h2 className="para">Reduces water footprint and promotes sustainable water management practices
              </h2>
            </li>
          </ul>
        </div>
    </section>
  )
})

export default Headings