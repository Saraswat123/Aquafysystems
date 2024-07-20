import React , {useState } from 'react';
import './navbar.css'
import { HiBars3 } from "react-icons/hi2";

const Navbar = ({ headerRef, headingsRef, techRef, awardsRef, aboutUsRef, contactRef }) => {
  const [active, setActive]= useState('navBar')
  const showNavBar = ()=>{
    setActive((active==='navBar')?'navBar activeNavBar':'navBar')
  }
  const offset=100;
  
  const scrollToSection = (ref) => {
    showNavBar();
    if (ref.current) {
      const topPos = ref.current.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };
  
  


  return (
    <section className='navBarSection'>
       <header className="header flex">
        <div className="logoDiv">
          <div onClick={() => scrollToSection(headerRef)} className="logo flex">
            <img className='icon' src='./Logo.jpeg' alt='logo'/>
            <h1>Aquafy Systems</h1>
          </div>
        </div>
        <div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <h2 onClick={() => scrollToSection(headerRef)} className="navLink">Home</h2>
            </li>
            <li className="navItem">
              <h2 onClick={() => scrollToSection(headingsRef)} className="navLink">Headings</h2>
            </li>
            <li className="navItem">
            <h2 onClick={() => scrollToSection(techRef)} className="navLink">Technology</h2>
            </li>
            <li className="navItem">
            <h2 onClick={() => scrollToSection(awardsRef)} className="navLink">Awards</h2>
            </li>
            <li className="navItem">
            <h2 onClick={() => scrollToSection(aboutUsRef)} className="navLink">About Us</h2>
            </li>
            <li className="navItem">
            <h2 onClick={() => scrollToSection(contactRef)} className="navLink">Contact</h2>
            </li>
          </ul>
        </div>  
        <div onClick={showNavBar} className="toggleNavBar">
        <HiBars3 className="icon"/>
        </div>
        </div>
       </header>
    </section>
  )
}

export default Navbar