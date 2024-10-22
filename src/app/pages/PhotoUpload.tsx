'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import {  X } from 'lucide-react'
import HeaderAcc from './HeaderAcc'

export default function PhotoUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(prevFiles => [...prevFiles, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    multiple: true
  })

  const removeFile = (index: number) => {
    setUploadedFiles(prevFiles => prevFiles.filter((_, i) => i !== index))
  }

  return (
   <>
   <HeaderAcc/>
    <div className="max-w-6xl mx-auto p-6 rounded-lg bg-[#F9F9F9] ">
      <h1 className=" tracking-[1.5x] font-normal text-[24x] font-ebgaramond mb-4">Photos</h1>
      <h2 className="text-lg font-normal font-ebgaramond mb-2">Upload Photos</h2>
      <p className="text-sm text-gray-500 mb-4">You need to upload at least 10 photos</p>

      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg px-8 py-[15%] text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 '
        }`}
      >
        <input {...getInputProps()} />
        {/* <Upload className="mx-auto h-12 w-12 text-gray-400" /> */}
        <Image
                  src="/img_frame.svg"
                  alt={`Upload photo `}
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] mx-auto"
                />
        <p className="mt-2 text-sm text-gray-500">Choose a file or drag and drop it here</p>
        <p className="text-xs text-gray-400 mt-1">JPEG, PNG, PDF formats</p>
        <button className=" mt-4 min-w-44 px-5 py-4 text-[#2A2A2A] !border rounded-lg" >Browse File</button>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-normal mb-4">Uploaded Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="relative group">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`Uploaded photo ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            {uploadedFiles.length >= 4 && (
              <div className="relative">
                <Image
                  src={URL.createObjectURL(uploadedFiles[3])}
                  alt="See all photos"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                  See all photos
                </div>
              </div>
            )}
          </div>
        </div>
      )}

<div className="flex justify-end space-x-4 mt-4 items-center">
        <p className="text-sm text-gray-500">2/6</p>
        <button type="submit" className="px-4 py-2 bg-[#F5F5F5] text-[#2A2A2A]  rounded-lg ">
        &larr; Previous
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Next &rarr;
          </button> 
           </div>
    </div>
   </>
  )
}