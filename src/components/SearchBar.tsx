'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Search } from 'lucide-react'
import { format, parse } from 'date-fns'
import { DateRange } from 'react-day-picker'
import Destinations from './Destinations'
import Guests from './Guests'

export default function SearchBar() {
  const [place, setPlace] = useState('')
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [dateInput, setDateInput] = useState('')
  const [guests, setGuests] = useState('')

  const formatDateForDisplay = (date: Date) => {
    return format(date, 'MMM d')
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateInput(e.target.value)
    const dates = e.target.value.split(' - ')
    if (dates.length === 2) {
      const [start, end] = dates
      const parsedStart = parse(start, 'MMM d', new Date())
      const parsedEnd = parse(end, 'MMM d', new Date())
      if (!isNaN(parsedStart.getTime()) && !isNaN(parsedEnd.getTime())) {
        setDateRange({ from: parsedStart, to: parsedEnd })
      }
    }
  }

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range)
    if (range?.from && range?.to) {
      setDateInput(`${formatDateForDisplay(range.from)} - ${formatDateForDisplay(range.to)}`)
    } else if (range?.from) {
      setDateInput(formatDateForDisplay(range.from))
    } else {
      setDateInput('')
    }
  }

  return (
    <div className="flex  items-center justify-center  w-full rounded-full max-w-4xl mx-auto">
      <div className="flex w-full items-center bg-white rounded-full shadow-lg overflow-hidden">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex-1 px-4 py-2 cursor-pointer">
              <div className="text-sm font-semibold text-gray-700 text-center">Place</div>
              <Input 
                type="text" 
                placeholder="Search Destination" 
                className="border-none shadow-none text-sm placeholder:text-gray-400 text-center"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0">
            <Destinations onSelect={setPlace} />
          </PopoverContent>
        </Popover>

        <div className="w-px bg-gray-200 self-stretch my-2" />

        <Popover>
          <PopoverTrigger asChild>
            <div className="flex-1 px-4 py-2 cursor-pointer">
              <div className="text-sm font-semibold text-gray-700 text-center">Date</div>
              <Input 
                type="text" 
                placeholder="Check in - Check out" 
                className="border-none shadow-none text-sm placeholder:text-gray-400 text-center"
                value={dateInput}
                onChange={handleDateChange}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={handleDateRangeChange}
              numberOfMonths={2}
              disabled={{ before: new Date() }}
            />
          </PopoverContent>
        </Popover>

        <div className="w-px bg-gray-200 self-stretch my-2" />

        <Popover>
          <PopoverTrigger asChild>
            <div className="flex-1 px-4 py-2 cursor-pointer">
              <div className="text-sm font-semibold text-gray-700 text-center">Guests</div>
              <Input 
                type="text" 
                placeholder="No. of Guests" 
                className="border-none shadow-none text-sm placeholder:text-gray-400 text-center"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0">
            <Guests onSelect={(selectedGuests) => setGuests(`${selectedGuests.Adults} Adults , ${selectedGuests.Children} children, ${selectedGuests.Rooms} rooms`)} />
          </PopoverContent>
        </Popover>

        <Button className="rounded-full bg-secondary hover:bg-secondary p-6 m-1" size="lg">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  )
}