"use client";

import React from "react";
import Listyourproperty3 from "./Listyourproperty3";
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

   <Listyourproperty3
     currentStep={3} 
     totalSteps={6} 
   />
   
   
   </>

  );
};

export default Page;
