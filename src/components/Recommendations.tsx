import React from 'react';
import Image from 'next/image';
import { Brain, MapPin } from 'lucide-react';

const Recommendations = () => {
  return (
    <div className="bg-secondary text-white py-9 px-24 max-md:p-5 md:mx-12 rounded-none md:rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h2 className="text-5xl max-md:text-4xl font-normal mb-4">Get Recommendations</h2>
          <p className="text-md mb-6">Sign in for personalized recommendations</p>           
          <button className="text-white font-semibold max-md:px-6 max-md:py-3 px-11 py-4 rounded-full border-2 border-white ">
            Sign In
          </button>
        </div>

        {/* Image and Cards Section */}
        <div className="relative mb-5 w-full md:w-1/2 max-w-sm">
          {/* Image Container */}
          <div className="rounded-2xl  overflow-hidden ">
            <Image
              src="/recommendtion.png" 
              alt="Modern interior" 
              width={350}
              height={350}
              className="object-cover hidden md:block w-80 h-80 "
            />
          </div>

          <div className="absolute top-44 -right-16 max-md:-right-4 flex justify-center flex-col gap-4">
            {/* Card 1 */}
            <div className="bg-white relative -left-12 text-black p-2 rounded-full flex items-center shadow-lg">
             <div className=" bg-orange-500 p-2 rounded-full m-1 flex justify-center items-center">
               <Brain className="w-6 h-6 text-white" />
               </div> 
             
              <div>

                <p className="font-semibold">Recommended room</p>
                <p className="text-xs text-gray-500">Based on your <strong>interest</strong></p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black py-2 pl-3 pr-9  rounded-full flex items-center shadow-lg">
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



