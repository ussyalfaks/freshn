'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, ChevronDown } from 'lucide-react'
import { format } from 'date-fns'
import HeaderAcc from '@/components/HeaderAcc'

export default function Listyourproperty4() {
  const [price, setPrice] = useState('')
  const [currency, setCurrency] = useState('NGN')
  const [availableDate, setAvailableDate] = useState<Date | undefined>(undefined)
  const [minStay, setMinStay] = useState('')
  const [maxStay, setMaxStay] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ price, currency, availableDate, minStay, maxStay })
  }

  return (
   <>
   <HeaderAcc/>
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-2">
      <h1 className="text-2xl font-normal mb-6">Pricing Information</h1>
      
      <div className="space-y-8">
        <div>
          <label htmlFor="nightly-rate" className="block font-normal text-gray-700 mb-1">
            Nightly Rate
          </label>
          <div className="relative">
            <Input
              id="nightly-rate"
              type="number"
              placeholder="Input price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="pr-16 py-6"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="h-full border-0 bg-transparent pr-8 pl-2 appearance-none"
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-8'>
          <h2 className="text-xl font-normal mb-4">Availability</h2>
          <div className="space-y-8">
            <div>
              <label htmlFor="available-date" className="block font-normal text-gray-700 mb-1">
                Available Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={`w-full bg-[#F9F9F9] rounded-md justify-start text-left font-normal py-6 ${!availableDate && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {availableDate ? format(availableDate, "PPP") : <span className='text-notgray  '>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={availableDate}
                    onSelect={setAvailableDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label htmlFor="min-stay" className="block font-normal text-gray-700 mb-1">
                Minimum Stay
              </label>
              <div className="relative">
                <select
                  id="min-stay"
                  value={minStay}
                  onChange={(e) => setMinStay(e.target.value)}
                  className="w-full py-4 px-3 border text-notgray  bg-[#F9F9F9] rounded-md appearance-none"
                >
                  <option value="">Input minimum stay</option>
                  {[1, 2, 3, 4, 5, 6, 7, 14, 30].map((days) => (
                    <option key={days} value={days.toString()}>
                      {days} {days === 1 ? 'night' : 'nights'}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
              </div>
            </div>

            <div>
              <label htmlFor="max-stay" className="block font-normal text-gray-700 mb-1">
                Maximum Stay
              </label>
              <div className="relative">
                <select
                  id="max-stay"
                  value={maxStay}
                  onChange={(e) => setMaxStay(e.target.value)}
                  className="w-full py-4 px-3 border text-notgray  bg-[#F9F9F9] rounded-md appearance-none"
                >
                  <option value="">Input maximum stay</option>
                  {[7, 14, 30, 60, 90, 180, 365].map((days) => (
                    <option key={days} value={days.toString()}>
                      {days} {days === 1 ? 'night' : 'nights'}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4  mb-3 mt-7 items-center">
        <p className="text-gray-500">4/6</p>
        <Link href="/Listyourproperty3">
    <button
      type="button"
      className="px-4 py-2 bg-[#F5F5F5] text-[#2A2A2A] rounded-lg">
      &larr; Previous
    </button>
  </Link>

  <Link href="/Listyourproperty5">
    <button
      type="button"
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      Next &rarr;
    </button>
  </Link>
      </div>
    </form>
   
   </>
  )
}