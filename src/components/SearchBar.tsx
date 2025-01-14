// "use client"

// import { useState } from 'react'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Calendar } from "@/components/ui/calendar"
// import { Search } from 'lucide-react'
// import { format } from 'date-fns'
// import { DateRange } from 'react-day-picker'
// import Destinations from './Destinations'
// import Guests from './Guests'

// interface SearchBarProps {
//   onFieldClick?: (field: 'dates' | 'guests') => void
// }

// export default function SearchBar({ onFieldClick }: SearchBarProps) {
//   const [place, setPlace] = useState('')
//   const [dateRange, setDateRange] = useState<DateRange | undefined>()
//   const [guests, setGuests] = useState('')
//   const [activePopover, setActivePopover] = useState<'location' | 'dates' | 'guests' | null>(null)

//   const formatDateRange = (range: DateRange | undefined) => {
//     if (!range) return ''
//     const start = range.from ? format(range.from, 'MMM d, yyyy') : ''
//     const end = range.to ? format(range.to, 'MMM d, yyyy') : ''
//     return start && end ? `${start} - ${end}` : start
//   }

//   const handleFieldClick = (field: 'dates' | 'guests') => {
//     if (onFieldClick) {
//       onFieldClick(field)
//     } else {
//       setActivePopover(field)
//     }
//   }

//   return (
//     <div className="flex items-center justify-center max-w-3xl mx-auto p-4">
//       <div className="flex w-full border-2 rounded-full py-2 px-2 items-center bg-white shadow-lg overflow-hidden">
//         <Popover open={activePopover === 'location'} onOpenChange={(isOpen) => setActivePopover(isOpen ? 'location' : null)}>
//           <PopoverTrigger asChild>
//             <div className="flex-1 items-center cursor-pointer">
//               <div className="text-sm font-semibold text-gray-700 text-center">Place</div>
//               <Input 
//                 type="text" 
//                 placeholder="Search Destination" 
//                 className="border-none outline-none rounded-full shadow-none w-full text-sm placeholder:text-gray-400 text-center"
//                 value={place}
//                 onChange={(e) => setPlace(e.target.value)}
//               />
//             </div>
//           </PopoverTrigger>
//           <PopoverContent className="w-80 p-0">
//             <Destinations onSelect={(selectedPlace) => {
//               setPlace(selectedPlace)
//               setActivePopover(null)
//             }} />
//           </PopoverContent>
//         </Popover>

//         <div className="w-px bg-gray-200 self-stretch my-2" />

//         <Popover open={activePopover === 'dates'} onOpenChange={(isOpen) => setActivePopover(isOpen ? 'dates' : null)}>
//           <PopoverTrigger asChild>
//             <div 
//               className="flex-1 items-center justify-start cursor-pointer"
//               onClick={() => handleFieldClick('dates')}
//             >
//               <div className="text-sm font-semibold text-gray-700 text-center">Date</div>
//               <Input 
//                 type="text" 
//                 placeholder="Add dates" 
//                 className="border-none outline-none rounded-full shadow-none text-sm placeholder:text-gray-400 text-center"
//                 value={formatDateRange(dateRange)}
//                 readOnly
//               />
//             </div>
//           </PopoverTrigger>
//           {!onFieldClick && (
//             <PopoverContent className="w-auto p-0" align="start">
//               <Calendar
//                 initialFocus
//                 mode="range"
//                 defaultMonth={dateRange?.from}
//                 selected={dateRange}
//                 onSelect={setDateRange}
//                 numberOfMonths={2}
//                 disabled={{ before: new Date() }}
//               />
//             </PopoverContent>
//           )}
//         </Popover>

//         <div className="w-px bg-gray-200 my-2" />

//         <Popover open={activePopover === 'guests'} onOpenChange={(isOpen) => setActivePopover(isOpen ? 'guests' : null)}>
//           <PopoverTrigger asChild>
//             <div 
//               className="flex-1 cursor-pointer"
//               onClick={() => handleFieldClick('guests')}
//             >
//               <div className="text-sm font-semibold text-gray-700 text-center">Guests</div>
//               <Input 
//                 type="text" 
//                 placeholder="Add guests" 
//                 className="border-none outline-none rounded-full shadow-none text-sm placeholder:text-gray-400 text-center"
//                 value={guests}
//                 readOnly
//               />
//             </div>
//           </PopoverTrigger>
//           {!onFieldClick && (
//             <PopoverContent className="w-80 p-0">
//               <Guests onSelect={(selectedGuests) => {
//                 setGuests(`${selectedGuests.Adults} Adults, ${selectedGuests.Children} children, ${selectedGuests.Rooms} rooms`)
//                 setActivePopover(null)
//               }} />
//             </PopoverContent>
//           )}
//         </Popover>

//         <Button className="rounded-full w-32 bg-secondary hover:bg-blue-600 p-7 m-1" >
//           <Search className="w-4 h-4 mr-2" />
//           Search
//         </Button>
//       </div>
//     </div>
//   )
// }











































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
    <div className="flex items-center justify-center  w-full px-4 md:px-0">
    <div className="flex flex-col md:flex-row items-center  justify-center w-80 md:max-w-3xl  mx-auto">
      <div className="flex w-full md:flex-row flex-col border-2 rounded-xl py-6 px-4 md:py-2 md:px-2 border-gray-400 md:border-none items-center bg-none md:bg-white space-y-4 md:space-y-0 md:space-x-2 md:rounded-full shadow-none overflow-hidden">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex-1 items-center bg-white border-2 border-notgray md:border-none rounded-2xl w-full md:w-96 cursor-pointer">
              <div className="text-sm font-semibold text-gray-700 pl-8 pt-1 md:pl-0 md:pt-0 md:text-center">Place</div>
              <Input 
                type="text" 
                placeholder="Search Destination" 
                className="border-none outline-none pl-8 rounded-full shadow-none w-full text-sm placeholder:text-gray-400 md:text-center"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0">
            <Destinations onSelect={setPlace} />
          </PopoverContent>
        </Popover>

        <div className="w-full hidden md:block md:w-px h-px md:h-10 bg-gray-200 my-2 md:my-0" />

        <Popover>
          <PopoverTrigger asChild>
            <div className="flex-1 items-center justify-start border-2 border-notgray md:border-none bg-white rounded-2xl w-full md:w-2/3 cursor-pointer">
              <div className="text-sm font-semibold text-gray-700 pl-8 pt-1 md:pl-0 md:pt-0 md:text-center">Date</div>
              <Input 
                type="text" 
                placeholder="Check in - Check out" 
                className="border-none outline-none pl-8 rounded-full shadow-none text-sm placeholder:text-gray-400 md:text-center"
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

        <div className="w-full hidden md:block md:w-px h-px md:h-10 bg-gray-200 my-2 md:my-0" />

        <Popover>
          <PopoverTrigger asChild>
            <div className="flex-1 bg-white rounded-2xl border-2 border-notgray md:border-none w-full md:w-72 cursor-pointer">
              <div className="text-sm font-semibold text-gray-700 pl-8 p-1 md:pl-0 md:pt-0 md:text-center">Guests</div>
              <Input 
                type="text" 
                placeholder="No. of Guests" 
                className="border-none outline-none pl-8 rounded-full shadow-none text-sm placeholder:text-gray-400 md:text-center"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0">
            <Guests onSelect={(selectedGuests) => setGuests(`${selectedGuests.Adults} Adults, ${selectedGuests.Children} children, ${selectedGuests.Rooms} rooms`)} />
          </PopoverContent>
        </Popover>

        <Button className="rounded-full md:w-32 bg-secondary w-full hover:bg-blue-600 p-7 m-1">
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </div>
  </div>
  )
}