import React from 'react'
import './Campus.css'
import campus_pic_1 from '../../assets/campus-pic-1.png'
import campus_pic_2 from '../../assets/campus-pic-2.png'
import campus_pic_3 from '../../assets/campus-pic-3.png'
import campus_pic_4 from '../../assets/campus-pic-4.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={campus_pic_1} alt=''></img>
        <img src={campus_pic_2} alt=''></img>
        <img src={campus_pic_3} alt=''></img>
        <img src={campus_pic_4} alt=''></img>
      </div>
      <button className='btn dark-btn'>See More Here ➡</button>
    </div>
  )
}

export default Campus
