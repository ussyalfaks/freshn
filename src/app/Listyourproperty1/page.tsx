"use client";

import React from "react";
import Listyourproperty1 from "./Listyourproperty1";

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
    <Listyourproperty1 
      currentStep={1} 
      totalSteps={6} 
    />
  );
};

export default Page;
