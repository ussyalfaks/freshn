"use client"

//import Header from '../components/Header'
//  import Hero from '../components/Hero'
//  import PropertyListing from '../components/PropertyListing'
//  import TopDestination from '../components/TopDestination'
//  import Recommendations from '../components/Recommendations'
// import RecommendationsSection from '@/components/RecommendationsSection'
//  import Footer from '@/components/footer'
//  import HeaderAcc from "@/components/HeaderAcc"
// import SignUp from "@/components/SignUp"
import UserProfile from "@/components/UserProfile"


export default function Home() {
  return (
    <div className='bg-[#f9f9f9] overflow-hidden'>
     

      {/*  <Header />  
        <HeaderAcc /> */}
         <UserProfile /> 
      
      <main>
        {/* <Hero /> 
         <PropertyListing /> 
         <TopDestination />  
         <RecommendationsSection />   
         <Recommendations />   
        <SignUp /> */}


      
      </main>

       {/*<Footer /> */}
    </div>
  )
}