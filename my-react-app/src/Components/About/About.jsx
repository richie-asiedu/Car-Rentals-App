import React from 'react'
import './About.css'
import about_image from '../../assets/about-img.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_image} alt='' className='about-img'></img>
        <img src={play_icon} alt='' className='play-icon'></img>
      </div>
      <div className="about-right">
        <h2>ABOUT UNIVERSITY</h2>
        <h3>Nurturing Tomorrow's Leaders Today</h3>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <p>With focus on innovation, hands-on learning, and personalized mentorship, our program s prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities</p>
      </div>
    </div>
  )
}

export default About
