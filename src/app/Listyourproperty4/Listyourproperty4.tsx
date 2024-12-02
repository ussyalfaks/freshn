'use client'

import { useState } from 'react'
import { ArrowLeft, Wifi, ChefHat, PocketIcon as Pool, Dog, ParkingMeterIcon as Parking, Camera, WashingMachine, Plus, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Amenity {
  id: string
  name: string
  icon: JSX.Element
}

export interface ExtendedPageProps {
    currentStep: number;
    totalSteps: number;
  }
export default function Listyourproperty1({
    currentStep = 4,
    totalSteps = 6,
  }: ExtendedPageProps) {

  const [amenities, setAmenities] = useState<Amenity[]>([
    { id: 'wifi', name: 'Wi-fi', icon: <Wifi className="h-6 w-6" /> },
    { id: 'kitchen', name: 'Kitchen', icon: <ChefHat className="h-6 w-6" /> },
    { id: 'pool', name: 'Swimming Pool', icon: <Pool className="h-6 w-6" /> },
    { id: 'pet-friendly', name: 'Pet-Friendly', icon: <Dog className="h-6 w-6" /> },
    { id: 'parking', name: 'Parking', icon: <Parking className="h-6 w-6" /> },
    { id: 'cctv', name: 'CCTV Surveillance (Exterior)', icon: <Camera className="h-6 w-6" /> },
    { id: 'washing', name: 'Washing Machine', icon: <WashingMachine className="h-6 w-6" /> },
  ])

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(['wifi', 'kitchen', 'cctv', 'washing'])
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [customAmenity, setCustomAmenity] = useState('')

  const toggleAmenity = (id: string) => {
    setSelectedAmenities(prev => 
      prev.includes(id) 
        ? prev.filter(amenityId => amenityId !== id)
        : [...prev, id]
    )
  }

  const addCustomAmenity = () => {
    if (customAmenity.trim()) {
      const newAmenity: Amenity = {
        id: `custom-${Date.now()}`,
        name: customAmenity.trim(),
        icon: <Plus className="h-6 w-6" />
      }
      setAmenities(prev => [...prev, newAmenity])
      setSelectedAmenities(prev => [...prev, newAmenity.id])
      setCustomAmenity('')
      setShowCustomInput(false)
    }
  }

  return (
    <div className='bg-[#FFFFFF] h-full'>
      <div className="container mx-auto px-4 py-8">
      {/* Progress Steps */}
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

      {/* Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button className="text-gray-600">
        <Link href="/Listyourproperty3">
          <ArrowLeft className="h-6 w-6" />
          </Link>
        </button>
        <div className="space-x-8 flex">
          <button className='rounded-full p-4 font-semibold border'>Save as Draft</button>
          <Link href="/Listyourproperty5" > 
          <button className='bg-secondary text-white py-4 px-6 rounded-full'>Continue</button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl lg:ml-56">
        <p className="text-sm text-muted-foreground mb-2">List your Property</p>
        <h1 className="text-3xl font-bold mb-2">Make your property stand out</h1>
        <p className="text-muted-foreground mb-8">
          Select amenities that can be found in your property.
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((amenity) => (
            <button
              key={amenity.id}
              onClick={() => toggleAmenity(amenity.id)}
              className={`py-8 pr-4 pl-9 rounded-xl border-2 transition-colors flex flex-col items-start justify-center gap-4 hover:border-blue-500 ${
                selectedAmenities.includes(amenity.id)
                  ? 'border-blue-500'
                  : 'border-gray-200'
              }`}
            >
              {amenity.icon}
              <span className="text-sm font-medium text-start">{amenity.name}</span>
            </button>
          ))}
          
          {/* Custom Amenity Button */}
          <button
            onClick={() => setShowCustomInput(true)}
            className={`p-6 rounded-xl border-2 border-gray-200 transition-colors flex flex-col items-center justify-center gap-4 hover:border-blue-500`}
          >
            <Plus className="h-6 w-6" />
            <span className="text-sm font-medium">Custom</span>
          </button>
        </div>

        {/* Custom Amenity Input */}
        {showCustomInput && (
          <div className="mt-4 flex items-center gap-2">
            <Input
              type="text"
              placeholder="Enter custom amenity"
              value={customAmenity}
              onChange={(e) => setCustomAmenity(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={addCustomAmenity} className="px-4">Add</Button>
            <Button variant="ghost" onClick={() => setShowCustomInput(false)} className="px-2">
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>

    </div> 
    
  )
}



// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { CalendarIcon, ChevronDown } from 'lucide-react'
// import { format } from 'date-fns'
// import HeaderAcc from '@/components/HeaderAcc'

// export default function Listyourproperty4() {
//   const [price, setPrice] = useState('')
//   const [currency, setCurrency] = useState('NGN')
//   const [availableDate, setAvailableDate] = useState<Date | undefined>(undefined)
//   const [minStay, setMinStay] = useState('')
//   const [maxStay, setMaxStay] = useState('')

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission
//     console.log({ price, currency, availableDate, minStay, maxStay })
//   }

//   return (
//    <>
//    <HeaderAcc/>
//     <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-2">
//       <h1 className="text-2xl font-normal mb-6">Pricing Information</h1>
      
//       <div className="space-y-8">
//         <div>
//           <label htmlFor="nightly-rate" className="block font-normal text-gray-700 mb-1">
//             Nightly Rate
//           </label>
//           <div className="relative">
//             <Input
//               id="nightly-rate"
//               type="number"
//               placeholder="Input price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="pr-16 py-6"
//             />
//             <div className="absolute inset-y-0 right-0 flex items-center">
//               <div className="relative">
//                 <select
//                   value={currency}
//                   onChange={(e) => setCurrency(e.target.value)}
//                   className="h-full border-0 bg-transparent pr-8 pl-2 appearance-none"
//                 >
//                   <option value="NGN">NGN</option>
//                   <option value="USD">USD</option>
//                   <option value="EUR">EUR</option>
//                 </select>
//                 <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='space-y-8'>
//           <h2 className="text-xl font-normal mb-4">Availability</h2>
//           <div className="space-y-8">
//             <div>
//               <label htmlFor="available-date" className="block font-normal text-gray-700 mb-1">
//                 Available Date
//               </label>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     type="button"
//                     variant="outline"
//                     className={`w-full bg-[#F9F9F9] rounded-md justify-start text-left font-normal py-6 ${!availableDate && "text-muted-foreground"}`}
//                   >
//                     <CalendarIcon className="mr-2 h-4 w-4" />
//                     {availableDate ? format(availableDate, "PPP") : <span className='text-notgray  '>Pick a date</span>}
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0">
//                   <Calendar
//                     mode="single"
//                     selected={availableDate}
//                     onSelect={setAvailableDate}
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             <div>
//               <label htmlFor="min-stay" className="block font-normal text-gray-700 mb-1">
//                 Minimum Stay
//               </label>
//               <div className="relative">
//                 <select
//                   id="min-stay"
//                   value={minStay}
//                   onChange={(e) => setMinStay(e.target.value)}
//                   className="w-full py-4 px-3 border text-notgray  bg-[#F9F9F9] rounded-md appearance-none"
//                 >
//                   <option value="">Input minimum stay</option>
//                   {[1, 2, 3, 4, 5, 6, 7, 14, 30].map((days) => (
//                     <option key={days} value={days.toString()}>
//                       {days} {days === 1 ? 'night' : 'nights'}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="max-stay" className="block font-normal text-gray-700 mb-1">
//                 Maximum Stay
//               </label>
//               <div className="relative">
//                 <select
//                   id="max-stay"
//                   value={maxStay}
//                   onChange={(e) => setMaxStay(e.target.value)}
//                   className="w-full py-4 px-3 border text-notgray  bg-[#F9F9F9] rounded-md appearance-none"
//                 >
//                   <option value="">Input maximum stay</option>
//                   {[7, 14, 30, 60, 90, 180, 365].map((days) => (
//                     <option key={days} value={days.toString()}>
//                       {days} {days === 1 ? 'night' : 'nights'}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-end space-x-4  mb-3 mt-7 items-center">
//         <p className="text-gray-500">4/6</p>
//         <Link href="/Listyourproperty3">
//     <button
//       type="button"
//       className="px-4 py-2 bg-[#F5F5F5] text-[#2A2A2A] rounded-lg">
//       &larr; Previous
//     </button>
//   </Link>

//   <Link href="/Listyourproperty5">
//     <button
//       type="button"
//       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//       Next &rarr;
//     </button>
//   </Link>
//       </div>
//     </form>
   
//    </>
//   )
// }