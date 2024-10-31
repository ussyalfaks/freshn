'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import { Star, MoveLeft, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '@/components/footer';

export default function RoomPhotos() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const photos = [
    '/img23.jpg',
    '/img22.jpg',
    '/img24.jpg',
    '/img23.jpg',
    '/img22.jpg',
    '/img23.jpg',
    '/img25.jpg',
    '/img25.jpg',
    '/img25.jpg',
    '/img25.jpg',
    '/img25.jpg',
    '/img25.jpg',
    '/img0.png',
  ]

  const openLightbox = (index: number) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const goToPrevious = () => {
    setPhotoIndex((prevIndex) => (prevIndex + photos.length - 1) % photos.length)
  }

  const goToNext = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  return (
   <>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Link href='/Roomdetails'><MoveLeft size={15} className='text-gray-400 mr-5 cursor-pointer'/></Link>
          <h1 className="text-2xl md:text-3xl font-bold">3-Bedroom Around Barnawa GRA</h1>
        </div>
        <div className="flex flex-wrap items-center text-sm md:text-base text-secondary">
          <Star className="w-4 h-4 fill-current text-blue-400 mr-1" />
          <span className="mr-2">4.84</span>
          <span className="mr-2 bg-gray-300 w-1 h-1 rounded-full" />
          <span className="mr-2">44 reviews</span>
          <span className="mr-2 bg-gray-300 w-1 h-1 rounded-full" />
          <span className="mr-2 flex items-center">
            <Image src="/wrd.svg" alt="Superhost" width={16} height={16} className="mr-1" />
            Superhost
          </span>
          <span className="mr-2 bg-gray-300 w-1 h-1 rounded-full" />
          <span className="flex items-center">
            <MapPin className="mr-1 w-4 h-4 text-slate-600" />
            Barnawa, <strong className="ml-1">Kaduna</strong>
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative w-full h-0 pb-[75%] cursor-pointer" onClick={() => openLightbox(index)}>
            <Image
              src={photo}
              alt={`Room photo ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div  className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
          <div className="relative w-full h-3/4 lg:max-w-4xl md:max-w-2xl sm:max-w-md max-w-sm mx-auto">
  <Image
    src={photos[photoIndex]}
    alt={`Room photo ${photoIndex + 1}`}
    fill
    className="object-cover rounded-lg"
  />

  {/* Close button */}
  <button
    className="absolute top-4 -right-9 bg-gray-500 p-1 rounded-full text-white hover:text-gray-300"
    onClick={closeLightbox}
  >
    <X size={24} />
  </button>

  {/* Previous button */}
  <button
    className="absolute -left-9 md:-left-10 top-1/2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white hover:text-gray-300"
    onClick={goToPrevious}
  >
    <ChevronLeft size={24} />
  </button>

  {/* Next button */}
  <button
    className="absolute -right-9 md:-right-10 top-1/2 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white hover:text-gray-300"
    onClick={goToNext}
  >
    <ChevronRight size={24} />
  </button>

</div>

          <div className="flex space-x-2 mt-4 pb-2 md:max-w-4xl max-w-2xl overflow-auto scrollbar-hide mx-5 md:mx-0">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`relative md:w-20 md:h-20 w-14 h-14  flex-shrink-0 cursor-pointer ${
                  index === photoIndex ? 'ring-2 ring-blue-700 rounded-lg' : ''
                }`}
                onClick={() => setPhotoIndex(index)}
              >
                <Image
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                />
                {index !== photoIndex && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='flex justify-end items-center mb-8 mt-2 space-x-5'>
        <button type='button' className="flex items-center underline">
          <Image src="/Share.svg" alt="Share" width={50} height={50} className="w-4 h-4 mr-1" />
          Share
        </button>
        <button type='button' className="flex items-center underline">
          <Image src="/Save.svg" alt="Save" width={50} height={50} className="w-4 h-4 mr-1" />
          Save
        </button>
      </div>
    </div>
    <Footer/>
   </>
  )
}