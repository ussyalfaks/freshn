"use client";

import { ArrowLeft } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Link from 'next/link';

export interface ExtendedPageProps {
  currentStep: number;
  totalSteps: number;
}

export default function Listyourproperty1({
  currentStep = 1,
  totalSteps = 6,
}: ExtendedPageProps) {

  return (
    <div className='bg-[#FFFFFF] h-full'>
<div className= "container mx-auto px-4 py-8 h-screen">
      <div className="mb-8">
        <div className="flex h-2 rounded-full overflow-hidden">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div 
              key={i} 
              className={`flex-1 ${
                i < currentStep 
                  ? 'bg-blue-500 rounded-full' 
                  : i === currentStep 
                    ? 'bg-gray-200 rounded-full' 
                    : 'bg-gray-200 rounded-full'
              } ${i > 0 ? 'ml-1' : ''}`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <button className="text-gray-600">
        <Link href="/">
          <ArrowLeft className="h-6 w-6" />
          </Link>
        </button>
        <div className="space-x-4 md:space-x-8 flex">
          <button className='rounded-full md:p-4 p-3 md:text-md text-sm font-semibold border'>Save as Draft</button>
          <Link href="/Listyourproperty2" > 
          <button className='bg-secondary text-white md:text-lg text-sm py-4 px-5 rounded-full'>Continue</button>
          </Link>
        </div>
      </div>

      <div className="max-w-2xl lg:ml-56">
        <h2 className="text-md mb-4">List your Property</h2>
        <h1 className="text-3xl font-bold mb-4">What is the name of your property?</h1>
        <p className="text-gray-600 mb-8">
          This is the house name your guests will see. Your billing and legal name can be added later.
        </p>

        <div className="space-y-4">
          <label htmlFor="propertyName" className="block text-sm font-semibold text-gray-700">
            Accommodation name
          </label>
          <Input 
            type="text" 
            id="propertyName" 
            placeholder="Type in property name" 
            className="w-11/12 rounded-xl py-6 focus:border-notgray"
          />
        </div>
      </div>
    </div>
    </div>
  )
}