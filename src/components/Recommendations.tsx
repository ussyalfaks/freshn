import React from 'react';
import { MapPin, Radio } from 'lucide-react';
import Image from "next/image"


const Recommendations = () => {
  return (
    <div className="bg-blue-500 p-2 py-3 mx-20 rounded-lg flex items-center justify-around">
      <div className="text-white">
        <h2 className="text-4xl font-bold mb-2">Get Recommendations</h2>
        <p className="mb-4">Sign in for personalized recommendations</p>
        <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-500 transition-colors">
          Sign In
        </button>
      </div>
      
      <div className="relative ">
        <Image 
          src="/recommendtion.png" 
          alt="Modern interior" 
          width={300}
          height={200}
          className="rounded-lg w-full h-80 shadow-lg"
        />
        <div className="absolute -right-4 bottom-2 bg-white rounded-full py-2 px-4 flex items-center shadow-md">
          <Radio className="text-orange-500 w-5 h-5 mr-2" />
          <div>
            <p className="font-semibold">Recommended room</p>
            <p className="text-sm text-gray-600">Based on your interest</p>
          </div>
        </div>
        <div className="absolute left-40 bottom-24 bg-white rounded-full py-2 px-4 flex items-center shadow-md">
          <MapPin className="text-blue-500 w-5 h-5 mr-2" />
          <div>
            <p className="font-semibold">Recommended room</p>
            <p className="text-sm text-gray-600">Based on your location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;