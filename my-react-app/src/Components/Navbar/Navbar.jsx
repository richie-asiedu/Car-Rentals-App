import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/cap-png.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() =>{
    window.addEventListener('scroll',() =>{
      window.scrollY > 40 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} className="logo"></img>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li className=''><Link to='hero'>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-265} duration={300}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-175} duration={300}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-265} duration={300}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-265} duration={300}>Testimonials</Link></li>
        <li><button className="btn"><Link to='contact' smooth={true} offset={-272} duration={300}>Contact Us</Link></button></li>
      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
