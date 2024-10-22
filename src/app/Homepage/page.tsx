"use client"

  import Header from '@/components/Header'
   import Hero from '@/components/Hero'
   import PropertyListing from '@/components/PropertyListing'
   import TopDestination from '@/components/TopDestination'
import Recommendations from '@/components/Recommendations'
// import RecommendationsSection from '@/components/RecommendationsSection'
import Footer from '@/components/footer'
 //  import HeaderAcc from "@/components/HeaderAcc"
// import SignUp from "@/components/SignUp"
//  import UserProfile from "@/components/UserProfile"
// import PropertyBasicsForm from "./Listyourproperty1/page"
import Newlistings from "@/components/Newlistings"
// import Roomphotos from '@/components/Roomphotos'
// import Roomdetails from "@/components/Roomdetails"
// import ConfirmAndPay from '@/app/ConfirmAndPay/page'
export default function Homepage() {
  return (
    <div className='bg-[#f9f9f9] overflow-hidden'>
     
     
         <Header /> 
         {/* <PropertyBasicsForm /> 
        <HeaderAcc /> 
        <UserProfile /> */}
      
      <main>
           <Hero /> 
         <PropertyListing /> 
         <TopDestination /> 
        <Newlistings />  
        <Recommendations />   

         {/*   
       <RecommendationsSection /> 
       <SignUp /> */}

{/* <Recommendations />   
<Roomdetails />   

<Roomphotos />   


<ConfirmAndPay />  */}  




      
      </main>

       <Footer />
    </div>
  )
}