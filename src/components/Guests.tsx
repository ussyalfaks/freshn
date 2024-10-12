'use client'

import { useState } from 'react'
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from 'lucide-react'

type GuestType = 'Adults' | 'Children' | 'Rooms'

export default function Guests({ onSelect }: { onSelect: (guests: { [key in GuestType]: number }) => void }) {
  const [guests, setGuests] = useState({ Adults: 2, Children: 0, Rooms: 3 })

  const handleChange = (type: GuestType, increment: boolean) => {
    const newGuests = { ...guests, [type]: Math.max(0, guests[type] + (increment ? 1 : -1)) }
    setGuests(newGuests)
    onSelect(newGuests)
  }

  return (
      
      <CardContent>
        {(Object.keys(guests) as GuestType[]).map((type) => (
          <div key={type} className="flex justify-between items-center p-5">
            <span>{type}</span>
            <div className="flex items-center border-2  rounded-md">
              <Button
                variant="outline"
                className='border-none'
                size="icon"
                onClick={() => handleChange(type, false)}
                aria-label={`Decrease ${type}`}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-2 w-8 text-center">{guests[type]}</span>
              <Button
                variant="outline"
                className='border-none'
                size="icon"
                onClick={() => handleChange(type, true)}
                aria-label={`Increase ${type}`}
              >
                <Plus className="h-4 w-4 text-blue-700" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
  )
}