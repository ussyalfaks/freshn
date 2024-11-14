"use client";

import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component({ currentStep = 1, totalSteps = 6 }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex h-2 rounded-full overflow-hidden">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div 
              key={i} 
              className={`flex-1 ${
                i < currentStep 
                  ? 'bg-blue-500' 
                  : i === currentStep 
                    ? 'bg-blue-300' 
                    : 'bg-gray-200'
              } ${i > 0 ? 'ml-1' : ''}`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <button className="text-gray-600">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="space-x-4">
          <Button variant="outline">Save as Draft</Button>
          <Button>Continue</Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">List your Property</h2>
        <h1 className="text-3xl font-bold mb-4">What is the name of your property?</h1>
        <p className="text-gray-600 mb-6">
          This is the house name your guests will see. Your billing and legal name can be added later.
        </p>

        <div className="space-y-4">
          <label htmlFor="propertyName" className="block text-sm font-medium text-gray-700">
            Accommodation name
          </label>
          <Input 
            type="text" 
            id="propertyName" 
            placeholder="Type in property name" 
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}