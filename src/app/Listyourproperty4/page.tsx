"use client";

import React from "react";
import Listyourproperty4 from "./Listyourproperty4";

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
    <Listyourproperty4
      currentStep={4} 
      totalSteps={6} 
    />
  );
};

export default Page;
