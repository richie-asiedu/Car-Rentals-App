import React from 'react'
import './Category.css'
import Navbar from '../Component/Navbar/Navbar'
import SideBar from '../Component/SideBar/SideBar'
import Booking from '../Component/Booking/Booking'
import PopularCars from '../Component/PopularCars/PopularCars'
import RecommendationCars from '../Component/RecommendationCars/RecommendationCars'
import Footer from '../Component/Footer/Footer'

const Category = () => {
  return (
    <div className='category-page'>
      <Navbar />
      <SideBar />
      <div className='lg:ml-[200px] pt-20 w-full px-4 md:px-8 lg:px-12'>
        <div className='drop flex flex-col space-y-8 py-8'>
          <Booking />
          <PopularCars />
          <RecommendationCars />
        </div>
      </div>
      <div className='py-2 center'>
        <Footer />
      </div>
    </div>
  )
}

export default Category

