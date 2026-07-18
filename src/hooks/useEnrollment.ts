"use client";

import { useState } from "react";

export function useEnrollment() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return {
    step,
    nextStep,
    previousStep,
  };
}