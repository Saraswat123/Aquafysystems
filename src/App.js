import React, {useRef} from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import AboutUs from './Components/AboutUs/AboutUs'
import Awards from './Components/Awards/Awards'
import Contact from './Components/Contact/Contact'
import Tech from './Components/Tech/Tech'
import Headings from './Components/Headings/Headings'


const App = () => {

  const headerRef = useRef(null);
  const headingsRef = useRef(null);
  const techRef = useRef(null);
  const awardsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        headerRef={headerRef}
        headingsRef={headingsRef}
        techRef={techRef}
        awardsRef={awardsRef}
        aboutUsRef={aboutUsRef}
        contactRef={contactRef}
      />
      <Header ref={headerRef} />
      <Headings ref={headingsRef} />
      <Tech ref={techRef} />
      <Awards ref={awardsRef} />
      <AboutUs ref={aboutUsRef} />
      <Contact ref={contactRef} />
    </>
  )
}

export default App