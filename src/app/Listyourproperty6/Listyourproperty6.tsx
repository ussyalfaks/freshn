'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Textarea } from "@/components/ui/textarea"




export interface ExtendedPageProps {
  currentStep: number;
  totalSteps: number;
}

export default function Listyourproperty6({ currentStep = 6, totalSteps = 6, }: ExtendedPageProps) {
  
    const [description, setDescription] = useState('')
  const maxLength = 500

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= maxLength) {
      setDescription(value)
    }
  }

  return (
  <div className='bg-[#FFFFFF] h-full'>
    <div className="container mx-auto px-4 py-8 h-screen">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex h-2 rounded-full overflow-hidden">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div 
              key={i} 
              className={`flex-1 ${
                i < currentStep 
                  ? 'bg-blue-500' 
                  : i === currentStep 
                    ? 'bg-gray-200 rounded-full' 
                    : 'bg-gray-200 rounded-full'
              } ${i > 0 ? 'ml-1' : ''}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button className="text-gray-600">
        <Link href="/Listyourproperty5">
          <ArrowLeft className="h-6 w-6" />
          </Link>
        </button>
        <div className="space-x-8 flex">
          <button className='rounded-full p-4 font-semibold border'>Save as Draft</button>
          <Link href="/Listyourproperty7" > 
          <button  className='bg-secondary text-white py-4 px-6 rounded-full'>
            Continue</button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl lg:ml-56">
        <p className="text-sm text-muted-foreground mb-2">List your Property</p>
        <h1 className="text-3xl font-bold mb-2">Add a description</h1>
        <p className="text-muted-foreground mb-8">
          Share what makes your place special
        </p>

        <div className="space-y-2">
          <Textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Nestled in the heart of Abuja, this modern stay offers everything you need for a relaxing stay."
            className="min-h-[200px] resize-none rounded-xl text-base p-4"
            maxLength={maxLength}
          />
          <div className="text-sm text-muted-foreground text-left">
            {description.length}/{maxLength}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}