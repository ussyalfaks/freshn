"use client"

  import Header from '@/components/Header'
   import Hero from '@/components/Hero'
   import PropertyListing from '@/components/PropertyListing'
   import TopDestination from '@/components/TopDestination'
import Recommendations from '@/components/Recommendations'
import Footer from '@/components/footer'
import Newlistings from "@/components/Newlistings"
export default function Homepage() {
  return (
    <div className='bg-[#f9f9f9] overflow-hidden'>
     
     
         <Header /> 
       
      
      <main>
        <Hero /> 
         <PropertyListing /> 
         <TopDestination /> 
        <Newlistings />  
        <Recommendations />   


        



      
      </main>

       <Footer />
    </div>
  )
}