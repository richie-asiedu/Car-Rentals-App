import { useState } from 'react'
import Booking from "./Component/Booking/Booking";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero"
import Title from "./Component/Title/Title"
import PopularCars from "./Component/PopularCars/PopularCars"
import RecommendationCars from "./Component/RecommendationCars/RecommendationCars"
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
        <div className='container'>
          <Hero />
          <Booking />
          <Title Title='Popular Cars' />
          <PopularCars />
          <Title Title='Recommendation Cars' />
          <RecommendationCars />
          <Footer />
        </div>
    </>
  );
}

export default App;
