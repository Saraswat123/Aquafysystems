import React from 'react'
import SIH from './Pics/SIH.jpeg'
import MOE from './Pics/MOE.jpeg'
import LT from './Pics/LT.png'
import M1 from './Pics/M1.jpeg'
import M2 from './Pics/M2.jpeg'
import M3 from './Pics/M3.jpeg'
import M4 from './Pics/M4.jpeg'


import './awards.css'

const Awards = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="awards">
      <div className="achivements">
        <h1 className="heading">Achivements</h1>
        <ul className="picList">
          <li className="achive">
            <div className="image">
              <img src={SIH} alt="SIH" />
            </div>
            <p className="text">SIH - Runners up 2023</p>
          </li>
          <li className="achive">
          <div className="image">
              <img src={MOE} alt="MoE" />
            </div>
            <p className="text">IDE Boot camp champion(AICTE)-2024</p>
          </li>
          <li className="achive">
          <div className="image">
              <img src={LT} alt="LT" />
            </div>
            <p className="text">L&T water challenge Ideathon-2024 <br/> - 2nd runners up</p>
          </li>
        </ul>
      </div>

      <div className="Media">
        <h1 className="heading">In Media</h1>
        <ul className="picList">
          <li className="achive">
            <div className="image">
              <img src={M1} alt="SIH" className='Med' />
            </div>
          </li>
          <li className="achive">
          <div className="image">
              <img src={M2} alt="MoE" className='Med' />
            </div>
          </li>
          <li className="achive">
          <div className="image">
              <img src={M3} alt="LT" className='Med'/>
            </div>
          </li>
          <li className="achive">
          <div className="image">
              <img src={M4} alt="LT" className='Med' />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
})

export default Awards