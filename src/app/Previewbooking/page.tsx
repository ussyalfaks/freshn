import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';
import Footer from '@/components/footer';






const BookingPreview: React.FC = () => {
  return (
    <>
        <div className="max-w-7xl mx-auto mt-14 p-4">
        <div className='flex items-center'>
        <Link href="/ConfirmAndPay">
        <MoveLeft size={15} className='text-gray-400 mr-5 cursor-pointer'/>
        </Link>
        <h1 className="text-xl md:text-3xl font-bold my-2">Preview Booking</h1>
      </div>
      <div className='flex mt-5 max-w-5xl max-w mx-auto justify-between flex-col md:flex-row md:gap-12 gap-10'>
      <div className=" border rounded-xl max-w-xl w-full p-8">

        <div className="rounded-lg overflow-hidden">
          <Image
            src="/img22.jpg"
            alt="Room"
            width={400}
            height={400}
            className="w-full h-60 object-cover rounded-xl"
          />
          <div className="py-3">
            <h2 className="text-lg font-semibold py-2">Blue Haven: New 2Br Apt w/ Private Terrace</h2>
            <p className="text-gray-600 mb-4">Hosted by Helen</p>

            <div className="text-md space-y-10">
              <div className="flex justify-between items-center border-b py-2">
                <span>Arrival</span>
                <span>6/30/2024</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <span>Departure</span>
                <span>12/30/2024</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <span>Number of rooms</span>
                <span>Entire rental room</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <span>Paid today (6/23/2024)</span>
                <span>$44.00</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <span>Outstanding</span>
                <span>$176.00</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <span>Date to pay outstanding</span>
                <span>6/30/2024</span>
              </div>
              <div className="flex justify-between items-center border-b py-2">
                <span>Reservation code</span>
                <span>HMAFGFD4H5</span>
              </div>
            </div>

            <p className="text-sm text-center text-gray-500 my-7">
              I agree to the <strong className='underline'>Host&apos;s House Rules,</strong>  <strong className='underline'>Ground Rules for guests,</strong> 
              <strong className='underline'>Freshinn&apos;s Rebooking and Refund Policy,</strong>  
              <strong className='underline'>Pay Less Upfront Terms,</strong> and that Freshinn can <strong className='underline'>charge my payment method</strong> if I&apos;m responsible for damages.
            </p>
            <div className="flex items-center justify-around mt-6 gap-8">
              <button className=" w-full p-5 border border-gray-700 text-gray-700 rounded-full ">Cancel Booking</button>
              <button className=" w-full p-5 bg-secondary text-white rounded-full "> Print Receipt</button>
            </div>
           
          </div>
        </div>
      </div>

     <div className='flex-1 mx-auto  md:mt-14'>
     <div className=" w-full flex items-center justify-between p-4 border rounded-lg text-sm">
        <div>
        <p className='font-semibold'>You have successfully booked the entire rental room of ``Blue Haven: New 2Br Apt w/ Private Terrace hosted by Helen.</p>
        <p className="mt-2">
          If you have any questions or need to contact the host about the venue, you can contact Helen <a href="#" className="text-blue-500">here</a>.
        </p>
        </div>
        <Image src="/message.svg"
      alt='' 
      width={200} 
      height={200}
      className='w-5 h-5'/>
      </div>
      
     </div>
      </div>
    </div>
    <Footer/>
    
    </>
  );
};

export default BookingPreview;
