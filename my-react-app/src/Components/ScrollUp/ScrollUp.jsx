import React from 'react'
import './ScrollUp.css'
import scroll_up_icon from '../../assets/scroll-up-icon.png'

const ScrollUp = () => {
  return (
    <div className='scrolltotop'>
      <a href='#'><img src={scroll_up_icon}></img></a>
    </div>
  )
}

export default ScrollUp
