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
    <div className="max-w-2xl px-11 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Set Your House Rules</h1>
          <p className="text-muted-foreground">
            Guests are expected to follow your rules and can be removed from Freshinn if they cause issues.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label>Pets allowed</Label>
              <p className="text-sm text-muted-foreground">
                You can refuse pets, but must reasonably accommodate service animals.
              </p>
              <Button variant="link" className="text-sm p-0 h-auto">
                Learn more
              </Button>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                className={!petsAllowed ? "bg-secondary text-white rounded-full" : " rounded-full"}
                size="icon"
                onClick={() => setPetsAllowed(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={petsAllowed ? "bg-secondary text-white rounded-full" : " rounded-full"}
                size="icon"
                onClick={() => setPetsAllowed(true)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label>Events allowed</Label>
            <div className="flex space-x-2">
            <Button
                variant="outline"
                className={!eventsAllowed ? "bg-secondary text-white rounded-full" : " rounded-full"}
                size="icon"
                onClick={() => setEventsAllowed(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={eventsAllowed ? "bg-secondary text-white rounded-full" : " rounded-full"}
                size="icon"
                onClick={() => setEventsAllowed(true)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div> 
          </div>

          <div className="flex items-center justify-between">
            <Label>Smoking, vaping, e-cigarettes allowed</Label>
            <div className="flex space-x-2">
            <Button
                variant="outline"
                className={!smokingAllowed ? "bg-secondary text-white rounded-full" : " rounded-full"}
                size="icon"
                onClick={() => setSmokingAllowed(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={smokingAllowed ? "bg-secondary text-white rounded-full" : " rounded-full"}
                size="icon"
                onClick={() => setSmokingAllowed(true)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Label>Commercial photography and filming allowed</Label>
            <div className="flex space-x-2">
            <Button
                variant="outline"
                className={!filmingAllowed ? "bg-secondary text-white rounded-full" : " rounded-full"}
                size="icon"
                onClick={() => setFilmingAllowed(false)}
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={filmingAllowed ? "bg-secondary text-white rounded-full" : " rounded-full"}
                size="icon"
                onClick={() => setFilmingAllowed(true)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-4 relative">
            <div className="flex items-center justify-between mb-4">
              <Label>Quiet hours</Label>
              <Button 
                variant="ghost" 
                size="icon"
              >
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm">Select start time</Label>
                <Select defaultValue="22:00">
                  <SelectTrigger>
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
                <Label className="text-sm">Select end time</Label>
                <Select defaultValue="10:00">
                  <SelectTrigger>
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
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Check-in window</Label>
              <p className="text-sm text-muted-foreground">10:00 AM</p>
            </div>
            <Button variant="ghost" className="text-sm">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Check-out time</Label>
              <p className="text-sm text-muted-foreground">10:00 AM</p>
            </div>
            <Button variant="ghost" className="text-sm">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <Label>Number of guests</Label>
            <div className="flex items-center gap-4 mt-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="text-lg">{guestCount}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuestCount(guestCount + 1)}
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Additional rules</Label>
              <p className="text-sm text-muted-foreground">Not set yet</p>
            </div>
            <Button variant="ghost" className="text-sm">
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

