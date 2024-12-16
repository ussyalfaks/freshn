'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { MinusIcon, PlusIcon, XIcon, X, Check } from 'lucide-react'
import Footer from "@/components/footer"
export default function HouseRules() {
  const [petsAllowed, setPetsAllowed] = useState(false)
  const [eventsAllowed, setEventsAllowed] = useState(false)
  const [smokingAllowed, setSmokingAllowed] = useState(false)
  const [filmingAllowed, setFilmingAllowed] = useState(false)
  
  const [guestCount, setGuestCount] = useState(2)

  return (
   <>
    <div className="max-w-3xl px-11 py-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Set Your House Rules</h1>
          <p className="text-muted-foreground">
            Guests are expected to follow your rules and can be removed from Freshinn if they cause issues.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between pb-8">
            <div>
              <Label className="font-semibold text-lg">Pets allowed</Label>
              <p className="text-sm text-muted-foreground">
                You can refuse pets, but must reasonably accommodate service animals.
              </p>
              <Button variant="link" className="text-sm font-semibold underline cursor-pointer p-0 h-auto">
                Learn more
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                className={!petsAllowed ? "bg-secondary text-white rounded-full" : "bg-transparent rounded-full"}
                size="icon"
                onClick={() => setPetsAllowed(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={petsAllowed ? "bg-secondary text-white rounded-full" : "bg-transparent rounded-full"}
                size="icon"
                onClick={() => setPetsAllowed(true)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between border-b-2 pb-8">
            <Label className="font-semibold text-lg">Events allowed</Label>
            <div className="flex space-x-4">
            <Button
                variant="outline"
                className={!eventsAllowed ? "bg-secondary text-white rounded-full" : "bg-transparent rounded-full"}
                size="icon"
                onClick={() => setEventsAllowed(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={eventsAllowed ? "bg-secondary text-white rounded-full" : "bg-transparent rounded-full"}
                size="icon"
                onClick={() => setEventsAllowed(true)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div> 
          </div>

          <div className="flex items-center justify-between border-b-2 pb-8">
            <Label className="font-semibold text-lg">Smoking, vaping, e-cigarettes allowed</Label>
            <div className="flex space-x-4">
            <Button
                variant="outline"
                className={!smokingAllowed ? "bg-secondary text-white rounded-full" : "bg-transparent rounded-full"}
                size="icon"
                onClick={() => setSmokingAllowed(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={smokingAllowed ? "bg-secondary text-white rounded-full" : "bg-transparent rounded-full"}
                size="icon"
                onClick={() => setSmokingAllowed(true)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between border-b-2 pb-8">
            <Label className="font-semibold text-lg">Commercial photography and filming allowed</Label>
            <div className="flex space-x-4">
            <Button
                variant="outline"
                className={!filmingAllowed ? "bg-secondary text-white rounded-full" : "bg-transparent rounded-full"}
                size="icon"
                onClick={() => setFilmingAllowed(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={filmingAllowed ? "bg-secondary text-white rounded-full" : "bg-transparent rounded-full"}
                size="icon"
                onClick={() => setFilmingAllowed(true)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-4 relative">
            <div className="flex items-center justify-between border-b-2  mb-4">
              <Label className="font-semibold text-lg">Quiet hours</Label>
              <Button 
                variant="ghost" 
                size="icon"
              >
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-lg text-shy">Select start time</Label>
                <Select defaultValue="22:00">
                  <SelectTrigger className="border-0">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="22:00">10:00 PM</SelectItem>
                    <SelectItem value="23:00">11:00 PM</SelectItem>
                    <SelectItem value="00:00">12:00 AM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-lg text-shy">Select end time</Label>
                <Select defaultValue="10:00">
                  <SelectTrigger className="border-0">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="06:00">6:00 AM</SelectItem>
                    <SelectItem value="07:00">7:00 AM</SelectItem>
                    <SelectItem value="08:00">8:00 AM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-6">
              <button className=" w-full rounded-full p-4 font-semibold border border-gray-500 hover:bg-none bg-transparent text-black" >Cancel</button>
              <button className=" w-full rounded-full p-4 font-semibold hover:bg-none text-white bg-secondary">Save</button>
            </div>
          </div>

          <div className="flex items-center justify-between border-b-2 pb-8">
            <div>
              <Label className="font-semibold text-lg">Check-in window</Label>
              <p className="text-md text-muted-foreground">10:00 AM</p>
            </div>
            <Button variant="ghost" className="text-sm underline font-semibold">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between border-b-2 pb-8">
            <div>
              <Label className="font-semibold text-lg">Check-out time</Label>
              <p className="text-md text-muted-foreground">10:00 AM</p>
            </div>
            <Button variant="ghost" className="text-sm underline font-semibold">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between border-b-2 pb-8">
            <Label className="font-semibold text-lg">Number of guests</Label>
            <div className="flex items-center gap-4 mt-2">
              <Button
                variant="outline"
                className="rounded-full bg-transparent"
                size="icon"
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="text-lg">{guestCount}</span>
              <Button
                variant="outline"
                className="rounded-full bg-secondary text-white"
                size="icon"
                onClick={() => setGuestCount(guestCount + 1)}
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between border-b-2 pb-8">
            <div>
              <Label className="font-semibold text-lg">Additional rules</Label>
              <p className="text-sm text-muted-foreground">Not set yet</p>
            </div>
            <Button variant="ghost" className="text-sm underline font-semibold">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}

