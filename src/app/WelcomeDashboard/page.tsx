import React from 'react';
import { Calendar, DoorOpen, Zap } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/footer';





const Tips = [
    {
        image: "/resource1.png",
        title:  'How to get paid for hosting',
      },
      {
        image: "/resource2.png",
        title:  'How to set pricing strategy',
      },
      {
        image: "/resource3.png",
        title:  'Preparing your home for guest',
      },
      {
        image: "/resource4.png",
        title:  'Writing a listing description well',
      },
]

const WelcomeDashboard = () => {


   

  return (
   <>
 <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Welcome, Helen!</h1>
        <p className="text-gray-600">
          Guests can reserve your place 24 hours after you publish - here &apos s <span className='underline cursor-pointer'>how to prepare.</span>
        </p>
        
        {/* Important Details Cards */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div  className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Complete important details</h3>
              <p className="text-sm text-gray-600 mb-3">Required to publish</p>
              <button className="text-blue-500 underline">Continue</button>
            </div>

            <div  className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Complete important details</h3>
              <p className="text-sm text-gray-600 mb-3">Required to publish</p>
              <button className="text-blue-500 underline">Continue</button>
            </div>
        </div>
      </div>

      {/* Next Steps Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Your Next Steps</h2>
        <p className="text-gray-600 mb-4">It &apos s time to review a couple of current settings.</p>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Turn instant Book on or off</h3>
          </div>
          <div className="border p-4 rounded-lg">
            <Calendar className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-2">Set up your calendar</h3>
            <p className="text-sm text-gray-600">Change the available dates</p>
          </div>
          <div className="border p-4 rounded-lg">
            <DoorOpen className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-2">Add your house rules</h3>
            <p className="text-sm text-gray-600">Set expectations with guests</p>
          </div>
          <div className="border p-4 rounded-lg">
            <Zap className="w-6 h-6 mb-2" />
            <h3 className="font-semibold mb-2">Pick a cancellation policy</h3>
            <p className="text-sm text-gray-600">Control your reservations</p>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">We &apos re Here To Help</h2>
        <p className="text-gray-600 mb-4">Don &apos t hesitate to contact us when you need help</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">Chat with Judith Andrew</h3>
              <p className="text-sm text-gray-600">Need some guidance? Reach out to your Superhost for information and tips.</p>
            </div>
          </div>
          <div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">Contact specialized support</h3>
              <p className="text-sm text-gray-600">As a new Host, you get one-tap access to a specially trained support team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Resources And Tips</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {Tips.map((tip, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  className="w-96 h-72 h object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="absolute bottom-3 rounded-md left-3 right-3 bg-white bg-opacity-90 p-3">
                <p className="text-sm font-semibold text-center">{tip.title}</p>
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