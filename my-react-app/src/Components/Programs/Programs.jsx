import React from 'react'
import './Program.css'
import Program_1 from '../../assets/Program-1.png'
import Program_2 from '../../assets/Program-2.png'
import Program_3 from '../../assets/Program-3.png'
import program_1_icon from '../../assets/program-1-icon.png'
import program_2_icon from '../../assets/program-2-icon.png'
import program_3_icon from '../../assets/program-3-icon.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
        <img src={Program_1} alt=''></img>
        <div className='caption'>
            <img src={program_1_icon}></img>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={Program_2} alt=''></img>
        <div className='caption'>
            <img src={program_2_icon}></img>
            <p>Masters Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={Program_3} alt=''></img>
        <div className='caption'>
            <img src={program_3_icon}></img>
            <p>Post Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
