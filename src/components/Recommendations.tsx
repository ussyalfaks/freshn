import React from 'react';
import Image from 'next/image';
import { Brain, MapPin } from 'lucide-react';

const Recommendations = () => {
  return (
    <div className="bg-secondary text-white md:py-9 md:px-20 md:mx-12 rounded-none md:rounded-2xl">
      <div className="flex flex-col lg:flex-row md:items-center justify-between">
        
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:mr-8 text-center pt-5 md:pt-0 md:text-left">
          <h2 className="md:text-5xl text-3xl font-semibold md:font-normal mb-0 md:mb-4">Get Recommendations</h2>
          <p className="text-md mb-6">Sign in for personalized recommendations</p>           
          <button className="text-white font-semibold px-6 max-md:py-3 md:px-11 py-4 rounded-full border-2 border-white ">
            Sign In
          </button>
        </div>

        {/* Image and Cards Section */}
        <div className="relative mb-5 w-full md:pr-9 md:w-1/2 ">
          {/* Image Container */}
          <div className="rounded-2xl  overflow-hidden ">
            <Image
              src="/recommendtion.png" 
              alt="Modern interior" 
              width={350}
              height={350}
              className="object-cover md:block hidden  w-80 h-80 "
            />
          </div>

          <div className="w-full md:absolute md:top-44 -right-16 max-md:-right-4 flex md:justify-center flex-col gap-4">
            {/* Card 1 */}
            <div className="bg-white md:relative pr-5 pl-3 md:pr-9 md:pl-3 md:-left-12 text-black py-2 self-start md:self-center rounded-r-full md:rounded-full flex items-center shadow-lg">
             <div className=" bg-orange-500 p-2 rounded-full m-1 flex justify-center items-center">
               <Brain className="w-6 h-6 text-white" />
               </div> 
             
              <div>

                <p className="font-semibold">Recommended room</p>
                <p className="text-xs text-gray-500">Based on your <strong>interest</strong></p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black py-2 px-3  md:pr-9 mr-0 md:mr-8 rounded-l-full md:self-center self-end md:rounded-full flex items-center shadow-lg">
              <div className='bg-secondary rounded-full p-2 m-1 flex justify-center items-center'>
              <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">Recommended room</p>
                <p className="text-xs text-gray-500">Based on your <strong>location</strong></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recommendations;



