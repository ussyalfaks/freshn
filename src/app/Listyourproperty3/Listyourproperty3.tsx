// 'use client'

'use client'

import { ArrowLeft, MapPin, Navigation } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export interface ExtendedPageProps {
    currentStep: number;
    totalSteps: number;
  }
  
  export default function Listyourproperty3({
    currentStep = 3,
    totalSteps = 6,
  }: ExtendedPageProps) {
  return (
   <div className=' h-full'>

<div className="container mx-auto px-4 py-8">
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
        <Link href="/Listyourproperty2">
          <ArrowLeft className="h-6 w-6" />
          </Link>
        </button>
        <div className="space-x-4 md:space-x-8 flex">
          <button className='rounded-full md:p-4 p-3 md:text-md text-sm font-semibold border'>Save as Draft</button>
          <Link href="/Listyourproperty4" > 
          <button className='bg-secondary text-white md:text-lg text-sm py-4 px-5 rounded-full'>Continue</button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl lg:ml-56">
        <p className="text-sm text-muted-foreground mb-2">List your Property</p>
        <h1 className="text-3xl font-bold mb-2">Where is your Property located?</h1>
        <p className="text-muted-foreground mb-8">
          This is the location your guests will see
        </p>

       {/* Map Container with Overlaid Controls */}
        <div className="relative">
          <div className="absolute inset-0 mapbg bg-cover bg-center rounded-lg"></div>
          <div className="relative z-10 p-4 space-y-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                className="pl-10 bg-white backdrop-blur-sm rounded-xl py-6 w-full" 
                placeholder="Enter your address"
                type="text"
              />
            </div>
            <Button 
              variant="outline" 
              className="w-full bg-white backdrop-blur-sm rounded-xl py-6 flex items-center gap-2 justify-center"
            >
              <Navigation className="h-4 w-4" />
              Use my current location
            </Button>
          </div>
          <div className="aspect-[16/10] rounded-lg overflow-hidden"></div>
        </div>
        
      </div>
    </div>
   </div>
  )
}










































// import { useState, useCallback } from 'react'
// import { useDropzone } from 'react-dropzone'
// import Link from 'next/link'
// import Image from 'next/image'
// import {  X } from 'lucide-react'
// import HeaderAcc from '@/components/HeaderAcc'


// export default function Listyourproperty3() {
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     setUploadedFiles(prevFiles => [...prevFiles, ...acceptedFiles])
//   }, [])

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'image/jpeg': ['.jpg', '.jpeg'],
//       'image/png': ['.png'],
//     },
//     multiple: true
//   })

//   const removeFile = (index: number) => {
//     setUploadedFiles(prevFiles => prevFiles.filter((_, i) => i !== index))
//   }

//   return (
//    <>
//    <HeaderAcc/>
//     <div className="max-w-6xl mx-auto p-6 rounded-lg ">
//       <h1 className=" tracking-[1.5x] font-normal text-[24x] font-ebgaramond mb-4">Photos</h1>
//       <h2 className="text-lg font-normal font-ebgaramond mb-2">Upload Photos</h2>
//       <p className="text-sm text-gray-500 mb-4">You need to upload at least 10 photos</p>

//       <div 
//         {...getRootProps()} 
//         className={`border-2 border-dashed rounded-lg px-8 py-[15%] text-center cursor-pointer transition-colors ${
//           isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 '
//         }`}
//       >
//         <input {...getInputProps()} />
//         {/* <Upload className="mx-auto h-12 w-12 text-gray-400" /> */}
//         <Image
//                   src="/img_frame.svg"
//                   alt={`Upload photo `}
//                   width={40}
//                   height={40}
//                   className="w-[40px] h-[40px] mx-auto"
//                 />
//         <p className="mt-2 text-sm text-gray-500">Choose a file or drag and drop it here</p>
//         <p className="text-xs text-gray-400 mt-1">JPEG, PNG, PDF formats</p>
//         <button className=" mt-4 min-w-44 px-5 py-4 text-[#2A2A2A] !border rounded-lg" >Browse File</button>
//       </div>

//       {uploadedFiles.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-lg font-normal mb-4">Uploaded Photos</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {uploadedFiles.map((file, index) => (
//               <div key={index} className="relative group">
//                 <Image
//                   src={URL.createObjectURL(file)}
//                   alt={`Uploaded photo ${index + 1}`}
//                   width={300}
//                   height={200}
//                   className="w-full h-48 object-cover rounded-lg"
//                 />
//                 <button
//                   onClick={() => removeFile(index)}
//                   className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             ))}
//             {uploadedFiles.length >= 4 && (
//               <div className="relative">
//                 <Image
//                   src={URL.createObjectURL(uploadedFiles[3])}
//                   alt="See all photos"
//                   width={300}
//                   height={200}
//                   className="w-full h-48 object-cover rounded-lg brightness-50"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
//                   See all photos
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

// <div className="flex justify-end space-x-4 mt-4 items-center">
//         <p className="text-sm text-gray-500">3/6</p>

//        <Link href="/Listyourproperty2">
//     <button
//       type="button"
//       className="px-4 py-2 bg-[#F5F5F5] text-[#2A2A2A] rounded-lg">
//       &larr; Previous
//     </button>
//   </Link>

//   <Link href="/Listyourproperty4">
//     <button
//       type="button"
//       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//       Next &rarr;
//     </button>
//   </Link> 
//            </div>
//     </div>
//    </>
//   )
// }