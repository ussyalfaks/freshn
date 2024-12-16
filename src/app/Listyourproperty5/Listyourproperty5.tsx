'use client'

import { useState, useCallback } from 'react'
import { ArrowLeft, ImageIcon, Upload, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'



interface UploadedImage {
  id: string
  url: string
}

export interface ExtendedPageProps {
    currentStep: number;
    totalSteps: number;
  }



  export default function Listyourproperty1({ currentStep = 5, totalSteps = 6, }: ExtendedPageProps) {

  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substring(7),
      url: URL.createObjectURL(file)
    }))
    setUploadedImages(prev => [...prev, ...newImages])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: true
  })

  
  return (
    <div className='  h-full'>
      <div className="container mx-auto px-4 pt-8 pb-12  h-full ">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex h-2 rounded-full overflow-hidden">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div 
              key={i} 
              className={`flex-1 ${
                i < currentStep 
                  ? 'bg-blue-500 rounded-full' 
                  : i === currentStep 
                    ? 'bg-gray-200 rounded-full' 
                    : 'bg-gray-200 rounded-full'
              } ${i > 0 ? 'ml-1' : ''}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button className="text-gray-600">
        <Link href="/Listyourproperty4">
          <ArrowLeft className="h-6 w-6" />
          </Link>
        </button>
        <div className="space-x-4 md:space-x-8 flex">
          <button className='rounded-full md:p-4 p-3 md:text-md text-sm font-semibold border'>Save as Draft</button>
          <Link href="/Listyourproperty6" > 
          <button className='bg-secondary text-white md:text-lg text-sm py-4 px-5 rounded-full'>Continue</button>
          </Link>
        </div>
      </div> 
              

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">List your Property</p>
        <h1 className="text-3xl font-bold mb-2">Add some images of your house</h1>
        <p className="text-muted-foreground mb-8">
          You&apos;ll need 5 images to get started, you can add more or make changes later.
        </p>

        {uploadedImages.length === 0 ? (
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-4">
              <ImageIcon className="h-40 w-12 text-gray-400" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Drag your images here</h3>
                <p className="text-sm text-gray-500">Choose at least 5 images</p>
              </div>
              <button  className="mt-4 underline font-semibold">
                Upload from your device
              </button>
            </div>
          </div>
        ) : (
          <div className="h-[calc(100vh-200px)] overflow-y-auto pr-24 scrollbar-thin">
            <div className="grid grid-cols-2 gap-4">
              {uploadedImages.map((image) => (
                <div key={image.id} className="aspect-[4/3] relative rounded-lg overflow-hidden  group">
                  <Image
                    src={image.url}
                    alt="Property image"
                    fill
                    className="  object-cover rounded-2xl"
                  />
                  <button
                    onClick={() => setUploadedImages(prev => prev.filter(img => img.id !== image.id))}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              ))}
              <div
                {...getRootProps()}
                className="aspect-[4/3] border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <input {...getInputProps()} />
                <Upload className="h-6 w-6 text-gray-400" />
                <p className="text-sm text-gray-500 text-center">Upload more images</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    </div>
  )
}

















// 'use client'

// import { useState, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { X, ChevronDown } from 'lucide-react';
// import HeaderAcc from '@/components/HeaderAcc';

// export default function Listyourproperty5() {
//   const [hostName, setHostName] = useState('')
//   const [hostBio, setHostBio] = useState('')
//   const [phoneCode, setPhoneCode] = useState('+234')
//   const [phoneNumber, setPhoneNumber] = useState('')
//   const [email, setEmail] = useState('')
//   const [profilePhoto, setProfilePhoto] = useState<File | null>(null)
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setProfilePhoto(event.target.files[0])
//     }
//   }

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault()
//   }

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault()
//     if (event.dataTransfer.files && event.dataTransfer.files[0]) {
//       setProfilePhoto(event.dataTransfer.files[0])
//     }
//   }

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     // Handle form submission
//     console.log({ hostName, hostBio, phoneNumber: phoneCode + phoneNumber, email, profilePhoto })
//   }

//   return (
//    <>
//     <HeaderAcc/>
//     <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-6">
//       <h1 className="text-2xl font-semibold mb-6">Host Information</h1>

//       <div>
//         <label htmlFor="host-name" className="block text-sm font-medium text-gray-700 mb-1">
//           Host Name
//         </label>
//         <Input
//           id="host-name"
//           value={hostName}
//           onChange={(e) => setHostName(e.target.value)}
//           placeholder="Input host name"
//           className="w-full py-6 px-2"
//         />
//       </div>

//       <div>
//         <label htmlFor="host-bio" className="block text-sm font-medium text-gray-700 mb-1">
//           Host Bio
//         </label>
//         <Textarea
//           id="host-bio"
//           value={hostBio}
//           onChange={(e) => setHostBio(e.target.value)}
//           placeholder="Write a short bio"
//           className="w-full p-2 h-32"
//           maxLength={500}
//         />
//         <p className="text-sm text-gray-500 text-right">{hostBio.length}/500</p>
//       </div>

//       <div>
//         <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">
//           Phone Number
//         </label>
//         <div className="flex">
//           <div className="relative">
//             <select
//               value={phoneCode}
//               onChange={(e) => setPhoneCode(e.target.value)}
//               className="appearance-none border border-input bg-transparent border-gray-300 rounded-l-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="+234">+234</option>
//               <option value="+1">+1</option>
//               <option value="+44">+44</option>
//             </select>
//             <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
//           </div>
//           <Input
//             id="phone-number"
//             type="tel"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="Input phone number"
//             className="flex-grow rounded-l-none"
//           />
//         </div>
//       </div>

//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//           Email Address
//         </label>
//         <div className="relative">
//           <Input
//             id="email"
//             type='Email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Input email address"
//             className="w-full py-6 px-2"
//           />
         
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Upload Profile Photo
//         </label>
//         <div
//           className="border-2 border-dashed border-gray-300 rounded-lg px-8 py-[15%] text-center cursor-pointer"
//           onDragOver={handleDragOver}
//           onDrop={handleDrop}
//           onClick={() => fileInputRef.current?.click()}
//         >
//           <Input
//             type="file"
//             ref={fileInputRef}
//             onChange={handleFileChange}
//             accept="image/*"
//             className="hidden"
//           />
//            <Image
//                   src="/img_frame.svg"
//                   alt={`Upload photo `}
//                   width={40}
//                   height={40}
//                   className="w-[40px] h-[40px] mx-auto"
//                 />
//           <p className="mt-1 text-sm text-gray-600">Choose a file or drag and drop it here</p>
//           <p className="mt-1 text-sm text-gray-500">JPEG, PNG, PDF formats</p>
//           <button className=" mt-4 min-w-44 px-5 py-4 text-[#2A2A2A] !border rounded-lg" >Browse File</button>
//         </div>
//       </div>

//       {profilePhoto && (
//         <div className="mt-4 relative inline-block">
//           <Image
//             src={URL.createObjectURL(profilePhoto)}
//             alt="Profile preview"
//             width={150}
//             height={150}
//             className="max-w-xs rounded w-36 h-36"
//           />
//           <button
//             type="button"
//             onClick={() => setProfilePhoto(null)}
//             className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         </div>
//       )}

     
// <div className="flex justify-end space-x-4 mt-4 items-center">
//         <p className="text-sm text-gray-500">5/6</p>

//         <Link href="/Listyourproperty4">
//     <button
//       type="button"
//       className="px-4 py-2 bg-[#F5F5F5] text-[#2A2A2A] rounded-lg">
//       &larr; Previous
//     </button>
//   </Link>

//   <Link href="/Listyourproperty6">
//     <button
//       type="button"
//       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//       Next &rarr;
//     </button>
//   </Link>

//            </div>
//     </form>
   
//    </>
//   )
// }