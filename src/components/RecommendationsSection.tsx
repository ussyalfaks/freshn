import React from 'react';
import Image from 'next/image';
import RecommendedRoom from './RecommendedRoom'
import { Brain } from 'lucide-react';


const RecommendationsSection = () => {
  return (
    <div className="mt-10">
    <div className="flex items-center rounded-[16px] bg-blue-700 p-11 md:flex-col md:p-5">
      <div className="flex w-full flex-col items-start gap-9">
        <div className="flex flex-col items-start gap-1.5 self-stretch">
          <h2
            className="text-[48px] font-normal text-gray-50 md:text-[44px] sm:text-[38px]"
          >
            Get Recommendations
          </h2>
          <p  className="text-[16px] font-medium text-gray-50">
            Sign in for personalized recommendations
          </p>
        </div>
        <button
          className="min-w-[144px] rounded-[38px] !border-2 px-8 font-medium sm:px-5"
        >
          Sign In
        </button>
      </div>
  
    <div className="w-full">
      <div className="flex items-center sm:flex-col">
        <div className="relative h-[314px] w-full sm:w-full">
          <Image
            src="/recommendtion.png"
            width={294}
            height={286}
            alt="Image"
            className="absolute bottom-0 right-[23px] m-auto h-[286px] w-[88%] rounded-[10px] object-contain"
          />
        </div>
  
        <div className="relative z-[1] mb-[38px] ml-[-116px] flex w-full flex-col gap-2 self-end md:flex-row sm:m1-0 sm:w-full sm:flex-col sm:self-auto">
          <RecommendedRoom />
          <div className="ml-[42px] flex flex-1 items-center justify-center gap-3.5 rounded-[30px] bg-gray-50 p-2.5 shadow-xs md:ml-0">
          <Brain className="w-6 h-6 text-orange-500 mr-3" />
            <div className="flex flex-1 flex-col items-start">
              <p className="text-[16px] font-semibold text-gray-900">
                Recommended room
              </p>
              <p className="text-[13px] font-normal text-gray-900">
                <span>Based on your</span>
                <span className="font-bold">&nbsp;</span>
                <span className="font-semibold">location</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
  );
};

export default RecommendationsSection;



