import React from 'react';
import { Brain } from 'lucide-react';


export default function RecommendedRoom() {

  return (
    <div
      className={`flex justify-center items-center mr-[42px] gap-3.5 p-2.5 md:mr-0 bg-gray-50 shadow-xs flex-1 rounded-[38px]`}
    >
     <Brain className="w-6 h-6 text-orange-500 mr-3" />

      <div className="flex flex-1 flex-col items-start self-end">
        <h6 className="text-[16px] font-semibold text-gray-900">
          Recommended Room
        </h6>
        <p className="text-[13px] font-normal text-gray-900">
          Based on your <span className="font-semibold">interest</span>
        </p>
      </div>
    </div>
  );
}