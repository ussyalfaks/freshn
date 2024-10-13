'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, ChevronDown } from 'lucide-react'

export default function HostInformationForm() {
  const [hostName, setHostName] = useState('')
  const [hostBio, setHostBio] = useState('')
  const [phoneCode, setPhoneCode] = useState('+234')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePhoto(event.target.files[0])
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setProfilePhoto(event.dataTransfer.files[0])
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission
    console.log({ hostName, hostBio, phoneNumber: phoneCode + phoneNumber, email, profilePhoto })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-6">Host Information</h1>

      <div>
        <label htmlFor="host-name" className="block text-sm font-medium text-gray-700 mb-1">
          Host Name
        </label>
        <Input
          id="host-name"
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
          placeholder="Input host name"
          className="w-full p-2"
        />
      </div>

      <div>
        <label htmlFor="host-bio" className="block text-sm font-medium text-gray-700 mb-1">
          Host Bio
        </label>
        <Textarea
          id="host-bio"
          value={hostBio}
          onChange={(e) => setHostBio(e.target.value)}
          placeholder="Write a short bio"
          className="w-full p-2 h-32"
          maxLength={500}
        />
        <p className="text-sm text-gray-500 text-right">{hostBio.length}/500</p>
      </div>

      <div>
        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <div className="flex">
          <div className="relative">
            <select
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
              className="appearance-none border border-input bg-transparent border-gray-300 rounded-l-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="+234">+234</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
          </div>
          <Input
            id="phone-number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Input phone number"
            className="flex-grow rounded-l-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <Input
            id="email"
            type='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input email address"
            className="w-full pr-10"
          />
         
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Profile Photo
        </label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg px-8 py-[15%] text-center cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
           <Image
                  src="/img_frame.svg"
                  alt={`Upload photo `}
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] mx-auto"
                />
          <p className="mt-1 text-sm text-gray-600">Choose a file or drag and drop it here</p>
          <p className="mt-1 text-sm text-gray-500">JPEG, PNG, PDF formats</p>
          <button className=" mt-4 min-w-44 px-5 py-4 text-[#2A2A2A] !border rounded-lg" >Browse File</button>
        </div>
      </div>

      {profilePhoto && (
        <div className="mt-4 relative inline-block">
          <Image
            src={URL.createObjectURL(profilePhoto)}
            alt="Profile preview"
            className="max-w-xs rounded"
          />
          <button
            type="button"
            onClick={() => setProfilePhoto(null)}
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

     
<div className="flex justify-end space-x-4 mt-4 items-center">
        <p className="text-sm text-gray-500">5/6</p>
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