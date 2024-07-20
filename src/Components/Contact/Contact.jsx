import React from 'react'
import './contact.css'
const Contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="contact">
      <div className="details">
        <h1 className="heading">Contact Details</h1>
        <a className='Email' href="mailto:aquafysystems@gmail.com">aquafysystems@gmail.com</a>
      </div>
      
    </section>
  )
})

export default Contact