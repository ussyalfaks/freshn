"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import { Star, Share, MoveLeft, MapPin, Wifi, Car, Key, ChevronDown, ChevronUp } from 'lucide-react'


export default function PropertyListing() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }
  const amenities = [
    { icon: Share, text: 'Exterior security cameras on property' },
    { icon: Share, text: 'Kitchen' },
    { icon: Share, text: 'Private backyard - Fully fenced' },
    { icon: Share, text: 'Free parking on premises' },
    { icon: Share, text: 'Garden view' },
    { icon: Share, text: 'Dedicated workspace' },
  ];

  const features = [
    {
      icon: Wifi,
      title: 'Dedicated workspace',
      description: 'A well-suited workspace with Wi-Fi',
    },
    {
      icon: Car,
      title: 'Free parking',
      description: 'Enjoy free parking in this safe environment',
    },
    {
      icon: Key,
      title: 'Self check-in',
      description: 'Check yourself in with the lockbox',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
       <div className="mb-6 flex flex-col">
         <div className='flex items-center'>
          <Link href='/Homepage'>
         <MoveLeft size={15} className='text-gray-400 mr-5 cursor-pointer'/>
          
          </Link>
         <h1 className="text-xl md:text-3xl font-bold my-2">3-Bedroom Around Barnawa GRA</h1>
         </div>
         <div className="flex text-sm md:text-lg items-center my-4 text-secondary">
           <Star className="w-4 h-4 fill-current text-blue-400 mr-1" />
           <span className="mr-2">4.84</span>
           <span className="mr-2 bg-gray-300 w-1 h-1 rounded-[1px]"></span>
           <span className="mr-2">44 reviews</span>
           <span className="mr-2 bg-gray-300 w-1 h-1 rounded-[1px]"></span>
           <span className="mr-2 flex items-center">
           <Image src="/wrd.svg" alt="Superhost" width={600} height={400} className="rounded-lg mr-1 w-4 h-4" />
           Superhost</span>
           <span className="mr-2 bg-gray-300 w-1 h-1 rounded-[1px]"></span>
           <span className='flex items-center'>
           <MapPin className='mr-1 w-4 h-4 text-slate-600'/> Barnawa, <strong>Kaduna</strong></span>
         </div>
       </div>

       {/* Responsive image grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
  <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-4">
    <Image
      src="/img22.jpg"
      alt="Main room"
      width={700}
      height={900}
      className="w-full h-full object-cover rounded-l-lg"
    />
  </div>

  {/* Smaller images */}
  <div className="sm:col-span-1 row-span-2">
    <Image
      src="/img22.jpg"
      alt="Room 2"
      width={350}
      height={375}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="sm:col-span-1 row-span-2">
    <Image
      src="/img23.jpg"
      alt="Room 3"
      width={350}
      height={375}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="sm:col-span-1 row-span-2">
    <Image
      src="/img23.jpg"
      alt="Room 4"
      width={350}
      height={450}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="sm:col-span-1 row-span-2">
   <Link href="/Roomphotos">
   
   <Image
      src="/img25.jpg"
      alt="Room 5"
      width={350}
      height={450}
      className="w-full h-full object-cover rounded-r-lg"
    />
   </Link>
  </div>
 
</div>
<div className='flex justify-end items-center mb-8 mt-2 space-x-5'>
          <button   className="flex items-center underline ">
            <Image  src="/Share.svg" alt="Room 5" width={50} height={50} className="w-4 h-4 mr-1" />
            Share
          </button>

          <button   className="flex items-center underline">
            <Image  src="/Save.svg" alt="Room 5" width={50} height={50} className="w-4 h-4 mr-1" />
            Save
          </button>
        </div>


      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-grow pr-9">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center mb-6">
              <Image src="/Profile.jpeg" alt="Host" width={60} height={60} className="rounded-2xl mr-4" />
              <div>
                <h2 className="text-2xl font-semibold">Hosted by Helen</h2>
                <p className="text-gray-600">2 years hosting</p>
              </div>
            </div>
          </div>

          {/* Features section */}
          <div className="grid grid-cols-2 md:w-11/12 md:grid-cols-3 md:space-x-4 mb-4">
      {features.map((feature, index) => (
        <div key={index} className="flex border p-2 my-2 mr-2 rounded-lg md:justify-center">
          {/* Dynamically render the icon */}
          <feature.icon className="w-6 h-6 mr-2" />
          <div>
            <h3 className="font-semibold text-sm">{feature.title}</h3>
            <p className="text-sm my-2 text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
          <div>
         <div className="mb-4 w-10/12">
        <p className="mb-4">
          The 3-Bedroom Around Barnawa GRA is located close to Narayi Junction. A car and driver will be provided for easy movements around the city.
        </p>
        <p className={`mb-4 transition-all ${isExpanded ? 'block' : 'line-clamp-2'}`}>
          You can visit the museum and enjoy the beautiful landscape at Kaduna town. Easily connected to areas like Sabo market, Kakau, and more. Enjoy your stay at Helen&apos;s.
        </p>
        <button 
          onClick={toggleExpanded} 
          className="flex items-center text-blue-500 font-semibold cursor-pointer"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          {isExpanded ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="mr-3 w-4 h-4" />}
        </button>
      </div>

          </div>

          <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {amenities.map((item, index) => (
              <div key={index} className="flex items-center font-extralight ">
                <div className="w-8 h-8 mr-4 flex items-center justify-center bg-muted rounded-full">
                  <item.icon className="w-4 h-4" />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking section responsive */}
        <div className="w-full md:w-7/12">
          <div className="border rounded-lg p-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-3xl text-secondary font-semibold">$14</span>
                <span className="text-muted-foreground">/night</span>
              </div>
           <span className="mr-2 bg-gray-300 w-2 h-2 rounded-[1px]"></span>
              <div className='flex'>
                <Star className="w-4 h-4 mr-1 text-gray-600" />
                <span className="font-semibold mr-1">4.84</span>
              </div>
           <span className="mr-2 bg-gray-300 w-2 h-2 rounded-[1px]"></span>
              <span className="text-secondary">· 44 reviews</span>
            </div>
            
            <div className="grid grid-cols-5 items-center justify-center gap-2 mb-4">
              <div className="border col-span-2 flex flex-col rounded p-2">
                <div className="text-sm my-2 font-semibold">CHECK-IN</div>
                <div className='my-1'>7th Aug 2024</div>
              </div>
              <div className="bg-gray-300 w-2 h-2 rounded-[1px] mx-auto"></div>
              <div className="border col-span-2 flex flex-col rounded p-2">
                <div className="text-sm my-2 font-semibold">CHECK-OUT</div>
                <div className='my-1'>9th Aug 2024</div>
              </div>
            </div>
            <div className='my-5'>
              <label className="block text-sm font-semibold mb-1">GUESTS</label>
                <select className="w-full py-2 bg-transparent">
                    {[1, 2, 3, 4, 5].map((num) => (
                   <option key={num} value={num}>
                    {num} {num === 1 ? 'Adult' : 'Adults'}
                   </option>
                       ))}
                    </select>
                     </div>
                     <Link href="ConfirmAndPay">
                        <button className="w-full rounded-3xl bg-secondary py-4 text-white text-md mb-4">Book Space</button>
                     </Link>
            <div className="text-md space-y-4">
              <div className="flex justify-between mb-2">
                <span>$14 x 3 nights</span>
                <span>$42</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Freshinn service fee</span>
                <span>$5</span>
              </div>
              <div className="flex justify-between pt-3 border-t-2 font-semibold">
                <span>TOTAL BEFORE TAXES</span>
                <span>$47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
