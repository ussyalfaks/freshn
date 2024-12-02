import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import CategoriesTab from '@/components/Categories'

const properties = [
  {
    id: 1,
    images: ["/herobg.jpeg", "/img22.jpg" , "/img23.jpg" , "/img2.png" , "/img25.jpg"],
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },
  {
    id: 2,
    images: ["/img24.jpg" , "/img22.jpg" , "/img2.png", "/img2.png" , "/img2.png"],
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },
  {
    id: 3,
    images: [ "/img1.png", "/img24.jpg" , "/img23.jpg" , "/img25.jpg"],
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  }, {
    id: 4,
    images: [ "/img1.png", "/img23.jpg" , "/herobg.jpeg", "/img22.jpg" , "/img25.jpg"],
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  }, {
    id: 5,
    images: [ "/img25.jpg", "/img22.jpg" , "/img23.jpg" , "/img24.jpg"],
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },
  // Add more properties here as needed
]

interface ImageCarouselProps {
  images: string[]
  autoplayInterval?: number
}

function ImageCarousel({ images, autoplayInterval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); 

  useEffect(() => {
    const intervalId = setInterval(nextImage, autoplayInterval);
    return () => clearInterval(intervalId); 
  }, [autoplayInterval, nextImage]);

  return (
    <>
       <div className="relative w-full h-48">
        <Image 
          src={images[currentIndex]} 
          alt={`Property Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.slice(0, 4).map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-[2px] ${index === currentIndex ? 'bg-gray-500' : 'bg-white border'}`}
          />
        ))}

        {images.length > 4 && (
          <div
            className={`w-1 h-1 my-auto rounded-[2px] ${currentIndex >= 3 ? 'bg-gray-500' : 'bg-white border'}`}
          />
        )}
      </div>
    </>
  )
}

export default function PropertyListing() {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState)
  }

  const visibleProperties = showMore ? properties : properties.slice(0, 8)

  return (
    <div className="container mb-4 mx-auto px-8 md:px-4">
      <CategoriesTab />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {visibleProperties.map((property) => (
          <div key={property.id} className="overflow-hidden">
            <CardContent className="p-0 relative">
              <ImageCarousel images={property.images} />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 bg-background rounded-full"
              >
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </CardContent>
            <div className="py-4 px-1 border-none">
              <div className="flex justify-between border-none items-center mb-2">
                <p className="text-sm text-gray-500">{property.location}</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm">{property.rating}/5</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">{property.name}</h3>
              <div className="flex border-none flex-wrap gap-2">
                {property.amenities.map((amenity) => (
                  <span key={amenity} className="text-xs bg-gray-100 border-none rounded-md px-1 py-1">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="font-bold">${property.price} <span className="font-normal text-sm">/ night</span></p>
              <Link href="/Roomdetails">
               <button className="rounded-full bg-secondary p-4 text-white m-1">Book Now</button>
               </Link>
            </div>
          </div>
        ))}
      </div>
      {properties.length > 8 && (
        <div className="flex justify-center mt-6">
        <button 
          onClick={toggleShowMore} 
          className="flex items-center text-lg text-secondary font-semibold"
        >
          {showMore ? (
            <>
              Show Less <ChevronUp className="ml-2" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="ml-2" />
            </>
          )}
        </button>
        </div>
      )}
    </div>
  )
}
