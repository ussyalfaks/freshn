import { useState, FormEvent } from 'react'

export default function PropertyDetailsForm() {
  const [description, setDescription] = useState('')
  const [additionalAmenities, setAdditionalAmenities] = useState('')
  const [houseRules, setHouseRules] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-6xl p-4 font-normal font-ebgaramond ">
      <h1 className="text-2xl tracking-[1.5x] font-normal text-[24x] font-ebgaramond mb-6">Property Details</h1>
      
      <fieldset className="mb-6">
        <legend className="text-lg font-normal mb-2">Description</legend>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="0/500"
          className="w-full bg-[#F9F9F9] h-40 p-2 border rounded"
          maxLength={500}
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg font-normal mb-2">Key Amenities</legend>
        <ul className="space-y-2">
          {['Wi-fi', 'Kitchen', 'Parking', 'Pool', 'Pet-friendly'].map((amenity) => (
            <li key={amenity} className="flex items-center">
              <input type="checkbox" id={amenity.toLowerCase()} name={amenity.toLowerCase()} className="mr-2 " />
              <label htmlFor={amenity.toLowerCase()}>{amenity}</label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg mb-2">Additional Amenities</legend>
        <textarea
          value={additionalAmenities}
          onChange={(e) => setAdditionalAmenities(e.target.value)}
          placeholder="0/500"
          className="w-full h-40 p-2 border bg-[#F9F9F9] rounded"
          maxLength={500}
        />
      </fieldset>

      <fieldset className="mb-6">
        <legend className="text-lg  mb-2">House Rules</legend>
        <textarea
          value={houseRules}
          onChange={(e) => setHouseRules(e.target.value)}
          placeholder="0/500"
          className="w-full h-40 p-2 bg-[#F9F9F9] border rounded"
          maxLength={500}
        />
      </fieldset>

      <div className="flex justify-end space-x-4 items-center">
        <p className="text-sm text-gray-500">2/6</p>
        <button type="submit" className="px-4 py-2 bg-[#F5F5F5] text-[#2A2A2A]  rounded-lg ">
        &larr; Previous
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Next &rarr;
          </button> 
           </div>
      
    </form>
  )
}