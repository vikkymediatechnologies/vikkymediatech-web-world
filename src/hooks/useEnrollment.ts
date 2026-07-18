"use client";

import { useState } from "react";
import { TOTAL_ENROLLMENT_STEPS } from "@/lib/validation/enrollment";

export function useEnrollment() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, TOTAL_ENROLLMENT_STEPS));
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
