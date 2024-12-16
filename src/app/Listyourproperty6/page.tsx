"use client";

import React from "react";
import Listyourproperty6 from "./Listyourproperty6";
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
    
       <Listyourproperty6
         currentStep={6} 
         totalSteps={6} 
       />
       
       
       </>
  );
};

export default Page;
