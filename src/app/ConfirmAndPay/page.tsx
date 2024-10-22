import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {  MoveLeft } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ConfirmAndPay = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className='flex items-center'>
         <MoveLeft size={15} className='text-gray-400 mr-5 cursor-pointer'/>
         <h1 className="text-xl md:text-3xl font-bold my-2">Confirm And Pay</h1>
         </div>
      
      <div className="flex max-w-5xl mx-auto justify-between flex-col md:flex-row gap-36">
        <div className="flex-1">
          <div className="border p-4 rounded-lg mb-4">
           <div>
           <p className="text-sm font-semibold text-gray-600">This is such a rare find.</p>
           <p className="text-sm text-gray-600">Helen's place is usually booked</p>
           </div>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Your trip</h2>
            <div className="flex justify-between">
              <p>Dates</p>
              <div>
                <p>Jul 13 - 15</p>
                <button className="text-blue-600 text-sm">Edit</button>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <p>Guests</p>
              <div>
                <p>2 guests</p>
                <button className="text-blue-600 text-sm">Edit</button>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Choose how to pay</h2>
            <div className="border rounded-lg p-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={true}
                  className="mr-2"
                  readOnly
                />
                <span>Pay part now, part later</span>
              </label>
              <p className="text-sm text-gray-600 mt-2">$44.00 due today, $176.00 on Jun 30, 2023. No extra fees.</p>
            </div>
            <div className="border rounded-lg p-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={true}
                  className="mr-2"
                  readOnly
                />
                <span>Pay part now, part later</span>
              </label>
              <p className="text-sm text-gray-600 mt-2">$44.00 due today, $176.00 on Jun 30, 2023. No extra fees.</p>
            </div>
          </div>
          
          <div className="mb-4">
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
            <p className="text-sm text-gray-600">Free cancellation before Jul 8. Cancel before check-in on Jul 13 for a partial refund.</p>
            <button className="text-blue-600 text-sm">Learn more</button>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg border-t py-4 font-semibold mb-2">Ground rules</h2>
            <p className="text-sm text-gray-600">We ask every guest to remember a few simple things about what makes a great guest.</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>Follow the house rules</li>
              <li>Treat your Host's home like your own</li>
            </ul>
          </div>
          
          <p className="text-sm border-t py-4 text-gray-600 mb-4">
            By selecting the button below, I agree to the Host's House Rules, Ground Rules for guests,
            FreshInn Rebooking and Refund Policy, Pay Less Upfront Terms, and that FreshInn can
            charge my payment method if I'm responsible for damage.
          </p>
          
          <button className="w-full rounded-full bg-secondary p-5 text-white">Confirm And Pay</button>
        </div>
        
        <div className="flex-1">
          <div className=''>
            <div className="p-8 border rounded-lg">
              <div className=' flex '>
              <Image
                src="/img25.jpg"
                alt="Room 5"
                width={220}
                height={220}
                className="w-24 h-24 object-cover rounded-lg mb-4 mr-2" />
              <div className="flex flex-col mb-2">
              <h3 className="text-lg font-semibold mb-4">Entire rental unit Blue Haven: New 2Br Apt w/ Private Terrace</h3>
              <div className='flex '>
              <span className="text-sm font-semibold">4.84</span>
              <span className="text-sm text-gray-600 ml-1">(44 reviews)</span>
              </div>
              </div>
             
              </div>
            <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">PRICE DETAILS</h4>
                <div className="flex justify-between mb-2">
                  <span>$90.00 x 2 nights</span>
                  <span>$180.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Cleaning fee</span>
                  <span>$40.00</span>
                </div>
                <div className="flex justify-between font-semibold">
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
  );
};

export default ConfirmAndPay;