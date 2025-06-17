import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import SideBar from '../Component/SideBar/SideBar'
import Booking from '../Component/Booking/Booking'
import PopularCars from '../Component/PopularCars/PopularCars'
import RecommendationCars from '../Component/RecommendationCars/RecommendationCars'
import Footer from '../Component/Footer/Footer'

const card = () => {
  return (
    <>
    <Navbar />
    <SideBar />
    {/* Main content area, offset for sidebar and navbar */}
    <div className='lg:ml-[200px] pt-20 w-full px-4 md:px-8 lg:px-12'>
      {/* Content for Booking, PopularCars, RecommendationCars */}
      <div className='drop flex flex-col space-y-8 py-8'>
        <Booking />
        <PopularCars />
        <RecommendationCars />
      </div>
      {/* Footer section */}
      <div className='py-2 center'>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default card

