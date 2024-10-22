"use client";
import Link from "next/link";
import HeaderAcc from "@/components/HeaderAcc";

const Listyourproperty1 = () => {
  return (
    <>
      <HeaderAcc />
      <div className="mx-auto max-w-6xl p-4">
        <h1 className="text-2xl font-normal mb-6">Property Basics</h1>
        <form>
          <div className="space-y-6">
            <div>
              <label className="block mb-1">Property Title</label>
              <input
                className="w-full text-notgray bg-[#F9F9F9] p-4 border rounded-lg"
                placeholder="Type in property title"
              />
            </div>

            <div>
              <label className="block mb-1">Property Type</label>
              <select className="w-full p-4 text-notgray bg-[#F9F9F9] border rounded-lg">
                <option value="" disabled selected>
                  Type in property type
                </option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Location of Property</label>
              <input
                className="w-full p-4 bg-[#F9F9F9] text-black border rounded-lg"
                placeholder="Type in location"
              />
            </div>

            <div>
              <label className="block mb-1">Number of Guests</label>
              <select className="w-full text-notgray p-4 bg-[#F9F9F9] border rounded-lg">
                <option value="" disabled selected>
                  Type in number of guests
                </option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num} className=" text-black">
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1">Number of Bedrooms</label>
              <select className="w-full p-4 text-notgray bg-[#F9F9F9] border rounded-lg">
                <option value="" disabled selected>
                  Type in number of bedrooms
                </option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num} >
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1">Number of Bathrooms</label>
              <select className="w-full p-4 text-notgray  bg-[#F9F9F9] border rounded-lg">
                <option value="" disabled selected>
                  Type in number of bathrooms
                </option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num} >
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end items-center">
            <span className="mr-5 font-raleway text-notgray">1/6</span>
            <Link href="/Listyourproperty2">
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Next →
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Listyourproperty1;
