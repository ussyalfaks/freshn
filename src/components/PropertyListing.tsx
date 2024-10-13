import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import CategoriesTab from '@/components/Categories'

const properties = [
  {
    id: 1,
    images: ["/herobg.jpeg", "/img1.png", "/img2.png"],
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },
  // ... (other properties)
]

interface ImageCarouselProps {
  images: string[]
  autoplayInterval?: number
}

function ImageCarousel({ images, autoplayInterval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  useEffect(() => {
    const intervalId = setInterval(nextImage, autoplayInterval)
    return () => clearInterval(intervalId)
  }, [autoplayInterval, images.length])

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
    {images.map((_, index) => (
      <div 
        key={index} 
        className={`w-2 h-2 ${index === currentIndex ? 'bg-gray-500' : 'bg-white border'}`}
      />
    ))}
  </div>
   </>
  )
}

export default function PropertyListing() {
  return (
    <div className="container mb-4 mx-auto px-4">
      <CategoriesTab />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
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
            <CardContent className="p-4">
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
                  <span key={amenity} className="text-xs bg-gray-100 border-none rounded-xl px-2 py-1">
                    {amenity}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 border-t">
              <p className="font-bold">${property.price} <span className="font-normal text-sm">/ night</span></p>
              <Button className="rounded-full bg-secondary p-6 m-1" size="lg">Book Now</Button>
            </CardFooter>
          </div>
        ))}
      </div>
    </div>
  )
}