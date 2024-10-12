'use client'

import React from 'react'
import {  Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import CategoriesTab from '@/components/Categories'






const properties = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  }, {
    id: 2,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },{
    id: 3,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },{
    id: 4,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },{
    id: 5,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },{
    id: 6,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },{
    id: 7,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },{
    id: 8,
    image: "/placeholder.svg?height=200&width=300",
    location: "Barnawa, Kaduna South",
    name: "The Easton At Maleny - Hamptons Countryside Retreat",
    rating: 4.8,
    amenities: ["Ocean view", "Security Cameras", "gardens"],
    price: 180
  },
]

export default function PropertyListing() {
 
  return (
   <>
    <div className="container mb-4  mx-auto px-4">
     <CategoriesTab/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="overflow-hidden">
          <CardContent className="p-0 relative">
            <Image 
              src='/herobg.jpeg' 
              alt={property.name}
              width={300}
              height={200}
              className="w-full h-48 rounded-lg object-cover"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 bg-background rounded-full"
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to favorites</span>
            </Button>
          </CardContent>
          <CardContent className="p-4 ">
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
                <span key={amenity} className="text-xs bg-gray-100 border-none rounded-xl px-2 py-1 ">
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
   
   </>
  )
}