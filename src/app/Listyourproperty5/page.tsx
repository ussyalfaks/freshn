"use client";

import React from "react";
import Listyourproperty5 from "./Listyourproperty5";
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

   
   
<Listyourproperty5
  currentStep={5} 
  totalSteps={6} 
/>
   </>


  );
};

export default Page;
