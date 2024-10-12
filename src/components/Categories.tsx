'use client'

import { useState, useRef, useEffect } from 'react'
import { MoveRight, MoveLeft, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All" },
  { id: "beachfront", name: "Beachfront" },
  { id: "mansions", name: "Mansions" },
  { id: "lakefront", name: "Lakefront" },
  { id: "luxurious", name: "Luxurious" },
  { id: "creative-spaces", name: "Creative spaces" },
  { id: "historical-homes", name: "Historical homes" },
  { id: "farms1", name: "Farms" },
  { id: "farms2", name: "Farms" },
  { id: "farms3", name: "Farms" },
  { id: "farms4", name: "Farms" },
  { id: "amazing-views", name: "Amazing views" }
]



export default function CategoriesTab() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      scrollRef.current.scrollLeft += scrollAmount
      checkScroll()
    }
  }

  return (
      <>
      <div className="w-full -ml-5 mb-6 relative">
      <Button 
            variant="ghost"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 bg-gray-200 transform -translate-y-1/2 rounded-full shadow-md z-10",
              !showLeftArrow && "opacity-0  pointer-events-none"
            )}
            onClick={() => scroll('left')}
          >
            <MoveLeft size={15}  className='text-gray-700'/>
          </Button>
        <div className="container flex items-center justify-between">
       
          <div className="relative items-center flex-grow max-w-[calc(100%-130px)]">
            <div 
              ref={scrollRef} 
              className="flex overflow-x-auto scrollbar-hide space-x-2 px-10"
              style={{ scrollBehavior: 'smooth' }}
              onScroll={checkScroll}
            >
              {categories.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-3 text-base text-[#747474] font-thin border-b-2 font-raleway border-transparent whitespace-nowrap transition-colors",
                    activeCategory === category.id && "text-secondary border-blue-500  font-raleway "
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <Button 
            variant="ghost"
            size="icon"
            className={cn(
              "absolute right-12 top-1/2 mr-9 transform -translate-y-1/2 rounded-full",
              !showRightArrow && "opacity-0 pointer-events-none"
            )}
            onClick={() => scroll('right')}
          >
            <MoveRight size={15} />
          </Button>
          <Button variant="ghost" size="icon" className="p-2 bg-blue-500 text-white rounded-full shadow-md">
            <Filter size={22} />
          </Button>
        </div>
      </div>
      
      
      </>

  )
}