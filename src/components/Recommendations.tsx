import React from 'react';
import Image from 'next/image';
import { Brain, MapPin } from 'lucide-react';

const Recommendations = () => {
  return (
    <div className="bg-blue-500 text-white py-2 px-8  md:p-8 mx-4 md:mx-16 rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">Get Recommendations</h2>
          <p className="text-lg mb-6">Sign in for personalized recommendations</p>           
          <button className="text-white font-semibold px-6 py-3 rounded-full border border-white ">
            Sign In
          </button>
        </div>

        {/* Image and Cards Section */}
        <div className="relative mb-5 w-full md:w-1/2 max-w-sm">
          {/* Image Container */}
          <div className="rounded-2xl overflow-hidden ">
            <Image
              src="/recommendtion.png" 
              alt="Modern interior" 
              width={350}
              height={350}
              className="object-cover w-72 h-72 "
            />
          </div>

          <div className="absolute -bottom-6 -right-6 flex justify-center flex-col gap-4">
            {/* Card 1 */}
            <div className="bg-white -left-6 text-black p-4 rounded-full flex items-center">
              <Brain className="w-6 h-6 text-orange-500 mr-3" />
              <div>
                <p className="font-semibold">Recommended room</p>
                <p className="text-xs text-gray-500">Based on your interest</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black p-4 rounded-full flex items-center">
              <MapPin className="w-6 h-6 text-blue-500 mr-3" />
              <div>
                <p className="font-semibold">Recommended room</p>
                <p className="text-xs text-gray-500">Based on your location</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recommendations;



