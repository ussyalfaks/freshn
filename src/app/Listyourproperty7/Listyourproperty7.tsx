'use client'

import { useState } from 'react'
import { ArrowLeft, Pencil } from 'lucide-react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export interface ExtendedPageProps {
    currentStep: number;
    totalSteps: number;
  }
  
  export default function Listyourproperty6({ currentStep = 6, totalSteps = 6, }: ExtendedPageProps) {
    
    const [price, setPrice] = useState('40')

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setPrice(value)
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
        <Link href="/Listyourproperty6">
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
        <h1 className="text-3xl font-bold mb-2">Set your Price</h1>
        <p className="text-muted-foreground mb-12">
          You can always change this whenever you want
        </p>

        <div className="flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <button className=" flex gap-4 border-none focus:no-underline">
                <div className="text-7xl font-serif items-start flex ">
                  <span className="text-9xl font-extrabold">$</span>
                  <span className='text-9xl font-extrabold'>{price}</span>
                </div>
                <div className='flex items-end mt-20 -mr-9'>
                <span className="text-3xl font-semibold">/Night</span>
                <span className='border rounded-full items-end'>   
                  <Pencil className="h-6 w-6  m-1  transition-colors" />
                   </span>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Set your price per night</DialogTitle>
              </DialogHeader>
              <div className="flex items-center gap-2 p-4">
                <span className="text-xl">$</span>
                <Input
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  className="text-xl"
                  placeholder="Enter price"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
   </div>
  )
}