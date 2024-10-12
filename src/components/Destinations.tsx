import {CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const popularDestinations = [
  { city: 'Abuja', country: 'Nigeria' },
  { city: 'Lagos', country: 'Nigeria' },
  { city: 'Port-Harcourt', country: 'Nigeria' },
  { city: 'Kaduna', country: 'Nigeria' },
]

export default function Destinations({ onSelect }: { onSelect: (destination: string) => void }) {
  return (
    <>
    
      <CardHeader>
        <CardTitle className="font-cinel">Popular Destinations</CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        {popularDestinations.map((destination) => (
          <Button
            key={destination.city}
            variant="ghost"
            className="w-full justify-start  pt-3 pb-8 border-b-2 m-3"
            onClick={() => onSelect(`${destination.city}, ${destination.country}`)}
          >
               <svg
                  fill="#5A5A5A"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 mr-2 font-thin"
                >
                  <path d="M236,116h-8.72266A100.19438,100.19438,0,0,0,140,28.72266V20a12,12,0,0,0-24,0v8.72266A100.19438,100.19438,0,0,0,28.72266,116H20a12,12,0,0,0,0,24h8.72266A100.19438,100.19438,0,0,0,116,227.27734V236a12,12,0,0,0,24,0v-8.72266A100.19438,100.19438,0,0,0,227.27734,140H236a12,12,0,0,0,0-24Zm-96,87.0437V200a12,12,0,0,0-24,0v3.0437A76.17428,76.17428,0,0,1,52.95654,140H56a12,12,0,0,0,0-24H52.95654A76.17428,76.17428,0,0,1,116,52.9563V56a12,12,0,0,0,24,0V52.9563A76.17428,76.17428,0,0,1,203.04346,116H200a12,12,0,0,0,0,24h3.04346A76.17428,76.17428,0,0,1,140,203.0437ZM128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20.0226,20.0226,0,0,1,128,148Z" />
                </svg>
            <div className="flex flex-col items-start p-5">
              <span className="py-2">{destination.city}</span>
              <span className="text-sm text-gray-500">{destination.country}</span>
            </div>
          </Button>
        ))}
      </CardContent>
    </>
  )
}