import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react'
import { useState } from 'react';
//  import PropertyBasicsForm from '../components/PropertyBasicsForm';
// import PropertyDetailsForm from './PropertyDetailsForm';
//import PhotoUpload from '../components/PhotoUpload';
// import PricingAvailabilityForm from '../components/PricingAvailabilityForm';
//import HostInformationForm from '../components/HostInformationForm';

// import SignUp from'./SignUp';
import CreatePasswordPage from './CreatePassword';




const HeaderAcc = () => {
  const [language, setLanguage] = useState('NG-EN');

  const toggleLanguage = () => {
    setLanguage(language === 'NG-EN' ? 'EN' : 'NG-EN');
  };

  return (
    <div className='bg-[#F9F9F9]'>
    <header className="z-50  flex justify-between px-[100px]  items-center p-4 bg-[#F9F9F9] shadow-md">
      
      <Image 
          src="/img_header_logo.png"
          alt="Freshinn Logo"
          width={168} 
          height={30}
          className='w-[168px] h-[30px]'
        />
     
      <div className="flex items-center  space-x-4">
        <Link href="/add-property" className="px-4 py-2 rounded-md  transition">
          Add a property
        </Link>
        <button onClick={toggleLanguage} className="flex items-center">
          <Image src="/earth.svg" className='border-2 rounded-full p-1 border-[#2A2A2A] ' alt="Language" width={32} height={32} />
          <span className="ml-1">{language}</span>
        </button>
        <div className=" flex justify-between items-center overflow-hidden">
          <Image src="/Profile.jpeg" className='rounded-full' alt="User Profile" width={40} height={40} />
          <ChevronDown className="w-6 h-6 ml-3 text-[#2A2A2A]" />
        </div>
      </div>
    </header>

    {/* <PropertyBasicsForm/> 
    <PropertyDetailsForm/> 
     <PhotoUpload/> 
    <PricingAvailabilityForm/>  
    <HostInformationForm/>
    <SignUp/>  */}
    <CreatePasswordPage/>

    
    
    </div>


  );
};

export default HeaderAcc;