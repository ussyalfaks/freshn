"use client";

import { ArrowLeft,  } from 'lucide-react'
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export interface ExtendedPageProps {
    currentStep: number;
    totalSteps: number;
  }
  
  export default function Listyourproperty2({
    currentStep = 2,
    totalSteps = 6,
  }: ExtendedPageProps) {
  return (
   <div className='bg-[#FFFFFF] h-full'>
    <div className="container mx-auto px-4 py-8">
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
        <Link href="/Listyourproperty1">
          <ArrowLeft className="h-6 w-6" />
          </Link>
        </button>
        <div className="space-x-4 md:space-x-8 flex">
          <button className='rounded-full md:p-4 p-3 md:text-md text-sm font-semibold border'>Save as Draft</button>
          <Link href="/Listyourproperty3" > 
          <button className='bg-secondary text-white md:text-lg text-sm py-4 px-5 rounded-full'>Continue</button>
          </Link>
        </div>
      </div>

      <div className="max-w-2xl lg:ml-56">
        <h2 className="text-md mb-4">List your Property</h2>
        <h1 className="text-3xl font-bold mb-4">About your property</h1>
        <p className="text-gray-600 mb-8">
          We just need a few details about your property
        </p>

        <form className="space-y-6">
          <div className="space-y-4">
            <label htmlFor="accommodationType" className="block text-sm font-semibold text-gray-700">
              Accommodation Type
            </label>
            <Select>
              <SelectTrigger id="accommodationType" className="w-11/12 rounded-xl py-6">
                <SelectValue placeholder="Select accomodation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label htmlFor="guests" className="block text-sm font-semibold text-gray-700">
              No. of Guests
            </label>
            <Select>
              <SelectTrigger id="guests" className="w-11/12 rounded-xl py-6">
                <SelectValue placeholder="Select number of guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label htmlFor="bedrooms" className="block text-sm font-semibold text-gray-700">
              No. of Bedrooms
            </label>
            <Select>
              <SelectTrigger id="bedrooms" className="w-11/12 rounded-xl py-6">
                <SelectValue placeholder="Select number of bedrooms" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label htmlFor="bathrooms" className="block text-sm font-semibold text-gray-700">
              No. of Bathrooms
            </label>
            <Select>
              <SelectTrigger id="bathrooms" className="w-11/12 rounded-xl py-6">
                <SelectValue placeholder="Select number of bathrooms" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
    </div>
   </div>
  )
}

































// "use client";
// import { useState, FormEvent } from 'react';
// import Link from 'next/link';
// import HeaderAcc from '@/components/HeaderAcc';

// export default function Listyourproperty2() {
//   const [description, setDescription] = useState('');
//   const [additionalAmenities, setAdditionalAmenities] = useState('');
//   const [houseRules, setHouseRules] = useState('');

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted');
//   };

//   return (
//     <>
//       <HeaderAcc />

//       <form onSubmit={handleSubmit} className="mx-auto max-w-6xl p-4 font-normal font-ebgaramond">
//         <h1 className="text-2xl tracking-[1.5x] font-normal text-[24x] font-ebgaramond mb-6">Property Details</h1>

//         <fieldset className="mb-6">
//           <legend className="text-lg font-normal mb-2">Description</legend>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="0/500"
//             className="w-full bg-[#F9F9F9] h-40 p-2 border rounded"
//             maxLength={500}
//           />
//         </fieldset>

//         <fieldset className="mb-6">
//           <legend className="text-lg font-normal mb-2">Key Amenities</legend>
//           <ul className="space-y-2">
//             {['Wi-fi', 'Kitchen', 'Parking', 'Pool', 'Pet-friendly'].map((amenity) => (
//               <li key={amenity} className="flex items-center">
//                 <input type="checkbox" id={amenity.toLowerCase()} name={amenity.toLowerCase()} className="mr-2" />
//                 <label htmlFor={amenity.toLowerCase()}>{amenity}</label>
//               </li>
//             ))}
//           </ul>
//         </fieldset>

//         <fieldset className="mb-6">
//           <legend className="text-lg mb-2">Additional Amenities</legend>
//           <textarea
//             value={additionalAmenities}
//             onChange={(e) => setAdditionalAmenities(e.target.value)}
//             placeholder="0/500"
//             className="w-full h-40 p-2 border bg-[#F9F9F9] rounded"
//             maxLength={500}
//           />
//         </fieldset>

//         <fieldset className="mb-6">
//           <legend className="text-lg mb-2">House Rules</legend>
//           <textarea
//             value={houseRules}
//             onChange={(e) => setHouseRules(e.target.value)}
//             placeholder="0/500"
//             className="w-full h-40 p-2 bg-[#F9F9F9] border rounded"
//             maxLength={500}
//           />
//         </fieldset>

//         <div className="flex justify-end space-x-4 items-center">
//           <p className="text-sm text-gray-500">2/6</p>

//   <Link href="/Listyourproperty1">
//     <button
//       type="button"
//       className="px-4 py-2 bg-[#F5F5F5] text-[#2A2A2A] rounded-lg">
//       &larr; Previous
//     </button>
//   </Link>

//   <Link href="/Listyourproperty3">
//     <button
//       type="button"
//       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//       Next &rarr;
//     </button>
//   </Link>
//         </div>
//       </form>
//     </>
//   );
// }
