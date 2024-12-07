'use client'
import { useState } from 'react';
import { Calendar, DoorOpen, Zap, CircleAlert } from 'lucide-react';
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';

const Tips = [
    { image: "/resource1.png", title: 'How to get paid for hosting' },
    { image: "/resource2.png", title: 'How to set pricing strategy' },
    { image: "/resource3.png", title: 'Preparing your home for guests' },
    { image: "/resource4.png", title: 'Writing a listing description well' },
];

const WelcomeDashboard = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Welcome, Helen!</h1>
          <p className="text-gray-600">
            Guests can reserve your place 24 hours after you publish - here&apos;s 
            <span className='underline cursor-pointer'> how to prepare.</span>
          </p>

          {/* Important Details Cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-6 max-w-3xl">
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-2">Complete important details</h3>
                <p className="text-sm text-gray-600 mb-3">Required to publish</p>
                <button className="text-blue-500 underline">Continue</button>
              </div>
              <CircleAlert className='text-red-600' />
            </div>

            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-2">Complete important details</h3>
                <p className="text-sm text-gray-600 mb-3">Required to publish</p>
                <button className="text-blue-500 underline">Continue</button>
              </div>
              <CircleAlert className='text-red-600' />
            </div>
          </div>
        </div>

        {/* Next Steps Section */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-4">Your Next Steps</h2>
          <p className="text-gray-600 mb-6">It&apos;s time to review a couple of current settings.</p>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-[#E3F4E7] p-4 rounded-xl" onClick={handleClick}>
              <div className="flex justify-end my-4">
                {selected ? (
                  <TbRosetteDiscountCheckFilled className="text-[#34A853]" size={33} />
                ) : (
                  <TbRosetteDiscountCheckFilled className="text-notgray " size={33} />
                )}
              </div>
              <h3 className="font-semibold mb-2">Turn Instant Book on or off</h3>
            </div>
            {/* Other sections */}
            <div className="border p-4 rounded-xl">
              <Calendar className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-2">Set up your calendar</h3>
              <p className="text-sm text-gray-600">Change the available dates</p>
            </div>
            <div className="border p-4 rounded-xl">
              <Link href="HouseRules">
              <DoorOpen className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-2">Add your house rules</h3>
              <p className="text-sm text-gray-600">Set expectations with guests</p>
              </Link>
            </div>
            <div className="border p-4 rounded-xl">
              <Zap className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-2">Pick a cancellation policy</h3>
              <p className="text-sm text-gray-600">Control your reservations</p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">We&apos;re Here To Help</h2>
          <p className="text-gray-600 mb-4">Don&apos;t hesitate to contact us when you need help</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className=" flex px-4 py-6 border rounded-xl">
            <Image src="/Profile.jpeg" className='rounded-full mr-4 w-12 h-12 object-cover' alt="User Profile" width={70} height={70} />
            <div>
            <h3 className="font-semibold mb-4">Chat with Judith Andrew</h3>
            <p className="text-md text-gray-600">Need some guidance? Reach out to your Superhost for information and tips.</p>
            </div>
            </div>
            <div className=" flex px-4 py-6 border rounded-xl">
            <Image src="/Profile.jpeg" className='rounded-full mr-4 w-12 h-12 object-cover' alt="User Profile" width={70} height={70} />
             <div>
             <h3 className="font-semibold mb-4">Contact specialized support</h3>
              <p className="text-md text-gray-600">As a new Host, you get one-tap access to a specially trained support team.</p>
             </div>
            </div>
          </div>
        </div>

        <div>
  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center md:text-left">
    Resources And Tips
  </h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Tips.map((tip, index) => (
      <div
        key={index}
        className="container relative rounded-lg overflow-hidden transition-shadow"
      >
        <div>
          <Image
            src={tip.image}
            alt={tip.title}
            width={400}
            height={300}
            className="w-full md:w-96 h-72 object-cover"
          />
        </div>
        
        {/* Overlay Title */}
        <div className="absolute bottom-3 left-3 right-3 bg-white bg-opacity-90 p-3 rounded-md text-center">
          <p className="text-sm md:text-base font-semibold cursor-pointer">
            {tip.title}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
      <Footer />
    </>
  );
};

export default WelcomeDashboard;
