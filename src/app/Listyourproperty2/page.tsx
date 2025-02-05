"use client";

import React from "react";
import Listyourproperty2 from "./Listyourproperty2";
import Header from "@/components/Header";

export interface PageProps {
  params?: Record<string, string | string[] | undefined>; // Explicit type for params
  searchParams?: Record<string, string | string[] | undefined>; // Explicit type for searchParams
}

export interface ExtendedPageProps {
  currentStep: number;
  totalSteps: number;
}

const Page: React.FC = () => {
  return (

     <>
       <Header/>
    
        
<Listyourproperty2 
  currentStep={2} 
  totalSteps={6} 
/>
       
       </>


  );
};

export default Page;
