'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { TbWorld } from "react-icons/tb"
import { SlQuestion } from "react-icons/sl"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DialogTitle } from "@/components/ui/dialog"

import Logo from "../../public/Logo.png"
import CalendarIcon from "../../public/appointment-02.png"
import TicketIcon from "../../public/coupon-03.png"
import MessageIcon from "../../public/message-02.png"
import CreditCardIcon from "../../public/creditcard.png"



const menuItems  = [
  // { href: '/signup', label: 'Sign up' },
  { href: '/bookings', label: 'My Bookings', image: CalendarIcon },
  { href: '/coupons', label: 'My Coupons' , image: TicketIcon },
  { href: '/messages', label: 'Message Center' , image: MessageIcon },
  { href: '/payment', label: 'Payment' , image: CreditCardIcon },
  { type: 'separator' },
  { href: '/settings', label: 'Settings' },
  { href: '/host', label: 'Host Login' },
  { href: '/help', label: 'Help Center' },
  { href: '/disputes', label: 'Disputes and Reports' },
  { href: '/logout', label: 'Log out' },
]



export default function Header() {
  return (
    <header className=" flex  justify-between z-50 items-center py-5 px-10 border-b-2 border-[#DBE1E766] ">
      <Link href="/" className="text-2xl font-bold flex flex-row items-center font-serif">
        <Image
          src={Logo}
          alt="Freshinn Logo"
          width={30}
          height={30}
          className=" w-5 h-5 md:w-auto md:h-auto"
        />
        <span className=" ml-2 text-sm md:text-3xl font-cinzel text-primary">FRESHINN</span>
      </Link>
      
      <div className="flex items-center justify-between gap-4">
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/Listyourproperty1" className="font-semibold text-md">
                List your property
              </Link>
            </li>
            <li>
              <SlQuestion className="text-notgray cursor-pointer" size={20} aria-label="Help" />
            </li>
            <li>
              <TbWorld className="font-semibold cursor-pointer" size={25} aria-label="Language" />
            </li>
          </ul>
        </nav>

        {/* Desktop User Menu */}
        <div className="hidden md:block">
          <DropdownMenu>
             <div className='bg-secondary flex items-center font-semibold text-white px-4 py-2 rounded-full space-x-2'>
             <div className='mr-2 size-8 bg-white rounded-full flex justify-center mx-auto items-center' >
                  <span className='text-secondary uppercase'>m</span>
                </div>
            <DropdownMenuTrigger asChild>
              <button className=" border-0 focus:outline-none outline-none  ">
                <Menu className="h-7 w-7" />
              </button>
            </DropdownMenuTrigger>
             </div>
            <DropdownMenuContent align="end" className="border-0 bg-[#F9F9F9] w-60 focus:outline-none outline-none px-5 pb-6 mt-3">
           
              {menuItems.map((item, index) => 
                item.type === 'separator' ? (
                  <DropdownMenuSeparator key={index} />
                ) : (
                  <DropdownMenuItem key={index}>
                     <Link href={item.href} className="w-full flex items-center my-1">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={` ${item.label}`}
                          width={362}
                          height={362}
                          className="mr-2 w-5 h-5"
                        />
                      )}
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent className='w-56'>
              <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
            <div className="mt-6 space-y-4">
              <Link href="/Listyourproperty1" className="block font-semibold">
                List your property
              </Link>
              {menuItems.map((item, index) => 
                item.type === 'separator' ? (
                  <div key={index} className="h-px bg-border my-4" />
                ) : (
                  <Link key={index} href={item.href} className=" flex items-center">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={` ${item.label}`}
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                  )}
                  {item.label}
                </Link>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}































// import Link from 'next/link';
// import Image from 'next/image';
// import { PiUserCircle } from "react-icons/pi";
// import { TbWorld } from "react-icons/tb";
// import { SlQuestion } from "react-icons/sl";
// import Logo from "../../public/Logo.png"

// export default function Header() {
//   return (
//     <>
//       <header className="flex justify-between z-50 items-center p-6 bg-background shadow-md">
//         <Link href="/" className="text-2xl font-bold flex flex-row items-center font-serif">
//           <Image
//             src={Logo}
//             alt="Freshinn Logo"
//             width={30}
//             height={30}
//             className="w-auto h-auto"
//           />
//           <span className="ml-2 font-cinzel text-primary">FRESHINN</span>
//         </Link>
//         <div className="flex items-center justify-between">
//           <nav className="mr-2">
//             <ul className="flex items-center space-x-4">
//               <li>
//                 <Link href="/Listyourproperty1" className="font-semibold text-sm hidden md:block">
//                   List your property
//                 </Link>
//               </li>
//               <li>
//                 <SlQuestion className="text-notgray cursor-pointer" size={20} aria-label="Help" />
//               </li>
//               <li>
//                 <TbWorld className="font-semibold cursor-pointer" size={25} aria-label="Language" />
//               </li>
//             </ul>
//           </nav>
//           <Link href="/WelcomeDashboard">
//             <button className="bg-secondary flex items-center font-semibold text-[#F9F9F9] rounded-full px-4 py-2">
//               <PiUserCircle className="mr-2" size={30} aria-label="User Icon" />
//               Sign In
//             </button>
//           </Link>
//         </div>
//       </header>
//     </>
//   );
// }
