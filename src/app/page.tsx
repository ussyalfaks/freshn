"use client"

import Header from '../components/Header'
 import Hero from '../components/Hero'
import PropertyListing from '../components/PropertyListing'
 import TopDestination from '../components/TopDestination'
import Recommendations from '../components/Recommendations'
// import HeaderAcc from "@/components/HeaderAcc"



// import PropertyGrid from '../components/PropertyGrid'
// import TopDestinations from '../components/TopDestinations'
// import NewListings from '../components/NewListings'
// import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-[#f9f9f9]'>
     

       <Header /> 
       {/* <HeaderAcc /> */}
      
      <main>
        <Hero /> 
         <PropertyListing /> 
         <TopDestination />  
         <Recommendations />  
        {/* <PropertyGrid /> */}
        {/* <NewListings /> */}
        {/* <RecommendationsSignup /> */}
      </main>

      {/* <Footer /> */}
    </div>
  )
}