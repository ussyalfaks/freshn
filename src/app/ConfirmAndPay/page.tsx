'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import  Footer  from '@/components/footer';
import Header from '@/components/Header';
const ConfirmAndPay = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [selectedOption, setSelectedOption] = useState('partNowPartLater');


  return (
   <>
   <Header/>
  <div className="max-w-7xl mx-auto px-4 py-6">
      <div className='flex items-center pb-6'>
        <Link href="/Roomdetails">
        <MoveLeft size={15} className='text-gray-400 mr-5 cursor-pointer'/>
        </Link>
        <h1 className="text-[1rem] md:text-3xl font-bold my-2">Confirm And Pay</h1>
      </div>
      
      <div className="flex max-w-5xl max-w mx-auto justify-between flex-col md:flex-row gap-20">
        <div className="flex-1">
          <div className="border py-4 px-6 rounded-lg mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-600">This is such a rare find.</p>
              <p className="text-sm text-gray-600">Helen&apos;s place is usually booked</p> 
            </div>
            <Image src="/diamond.svg" alt='diamond' width={200} height={200} className='w-5 h-5' />
          </div>
          
          <div className="my-4 border-b py-4">
            <h2 className="text-lg font-semibold mb-2">Your trip</h2>
            <div className="flex justify-between">
              <div className='space-y-2'>
              <p className='font-semibold'>Dates</p>
                <p>Jul 13 - 15</p>
              </div>
              <button className="text-blue-600 text-sm">Edit</button>
            </div>
            <div className="flex justify-between mt-2">
              <div className='space-y-2'>
              <p className='font-semibold'>Guests</p>
                <p>2 guests</p>
              </div>
              <button className="text-blue-600 text-sm">Edit</button>
            </div>
          </div>
          
         

    <div className="my-4 border-b py-3">
      <h2 className="text-lg font-semibold mb-2">Choose how to pay</h2>

      <div className="">
      {/* First Option */}
      <div
        className={`flex items-center justify-between  rounded-lg p-4 my-2 cursor-pointer ${
          selectedOption === 'partNowPartLater' ? 'border border-blue-500' : ''
        }`}
        onClick={() => setSelectedOption('partNowPartLater')}
      >
        <div>
        <label className="flex flex-col">
            <span className="font-semibold text-xs">Pay full amount now</span>
            <p className="text-sm text-gray-600">
              $220.00 due today. Save $20 by paying in full.
            </p>
          </label>
        </div>
        {selectedOption === 'partNowPartLater' ? (
          // Selected state: Blue icon with checkmark
          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        ) : (
          // Unselected state: Grey border icon
          <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-700 rounded-full">
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Second Option */}
      <div
        className={`flex items-center justify-between  rounded-lg p-4 my-2 cursor-pointer ${
          selectedOption === 'fullNow' ? 'border border-blue-500' : ''
        }`}
        onClick={() => setSelectedOption('fullNow')}
      >
        <div>
        <label className="flex flex-col">
            <span className="font-semibold text-xs">Pay part now, part later</span>
            <p className="text-sm text-gray-600">
              $44.00 due today, $176.00 on Jun 30, 2023. No extra fees.
              <span className="underline ml-1 cursor-pointer">More info</span>
            </p>
          </label>
         
        </div>
        {selectedOption === 'fullNow' ? (
          // Selected state: Blue icon with checkmark
          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        ) : (
          // Unselected state: Grey border icon
          <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-700 rounded-full">
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
    </div>
          
          <div className="mb-4 border-b py-6">
            <h2 className="text-lg font-semibold mb-2">Pay with</h2>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="credit">Credit or debit card</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
              </SelectContent>
            </Select>
            
            <Input className="mt-2" placeholder="Card number" />
            <div className="flex gap-2 mt-2">
              <Input placeholder="Expiration" />
              <Input placeholder="CVV" />
            </div>
            <Input className="mt-2" placeholder="ZIP code" />
            
            <Select defaultValue="us">
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Cancellation policy</h2>
            <p className="text-sm text-gray-600"><strong>Free cancellation before Jul 8.</strong>
             Cancel before check-in on Jul 13 for a partial refund.
            <span className="font-semibold underline text-gray-600 ml-1 cursor-pointer text-sm">Learn more</span>
            </p>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg border-t py-3 font-semibold mb-2">Ground rules</h2>
            <p className="text-sm text-gray-600 font-semibold">We ask every guest to remember a few simple things about what makes a great guest.</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>Follow the house rules</li>
              <li>Treat your Host&apos;s home like your own</li> {/* Corrected */}
            </ul>
          </div>
          
          <p className="text-sm border-t py-4 text-gray-600 my-4">
            By selecting the button below, I agree to the <strong className='underline cursor-pointer'>Host&apos;s House Rules, Ground Rules for guests,
            FreshInn Rebooking</strong > and <strong className='underline cursor-pointer'>Refund Policy, Pay Less Upfront Terms,</strong> and that FreshInn can
            charge my payment method if I&apos;m responsible for damage. {/* Corrected */}
          </p>
          <Link href="/Previewbooking">
          <button className="w-full rounded-full bg-secondary p-5 text-white">Confirm And Pay</button>
          </Link>
        </div>
        
        <div className="flex-1">
          <div className=' '>
            <div className="p-8 border rounded-xl">
              <div className='flex'>
                <Image
                  src="/img25.jpg"
                  alt="Room 5"
                  width={220}
                  height={220}
                  className="w-32 h-28 object-cover rounded-lg mb-4 mr-2" />
                <div className="flex flex-col mb-2">
                  <span className='text-sm text-gray-500'>Entire rental room</span>
                  <h3 className="text-sm font-semibold mb-4 text-gray-500">Entire rental unit Blue Haven: New 2Br Apt w/ Private Terrace</h3>
                  <div className='flex'>
                    <span className="text-sm font-semibold">4.84</span>
                    <span className="text-sm text-gray-600 ml-1">(44 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">PRICE DETAILS</h4>
                <div className="flex justify-between mb-2 space-y-2">
                  <span>$90.00 x 2 nights</span>
                  <span>$180.00</span>
                </div>
                <div className="flex justify-between space-y-2 mb-2">
                  <span>Cleaning fee</span>
                  <span>$40.00</span>
                </div>
                <div className="flex justify-between space-y-1 font-semibold">
                  <span>Total (USD)</span>
                  <span>$220.00</span>
                </div>
              </div>
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between mb-2">
                  <span>DUE NOW</span>
                  <span>$44.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Due Jun 30, 2024</span>
                  <span>$176.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<Footer/>

   </>
  );
};

export default ConfirmAndPay;
