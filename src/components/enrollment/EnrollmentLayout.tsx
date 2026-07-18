"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEnrollment } from "@/hooks/useEnrollment";

import {
  personalInformationSchema,
  PersonalInformationSchema,
} from "@/lib/validation/enrollment";

import EnrollmentProgress from "./EnrollmentProgress";
import PersonalInformation from "./PersonalInformation";
import EducationInformation from "./EducationInformation";
import CourseSummary from "./CourseSummary";
import PaymentSummary from "./PaymentSummary";
import ReviewInformation from "./ReviewInformation";
import NavigationButtons from "./NavigationButtons";
import CourseSidebar from "./CourseSidebar";

export default function EnrollmentLayout() {
  const { step, nextStep, previousStep } = useEnrollment();

  const {
    register,
    formState: { errors },
  } = useForm<PersonalInformationSchema>({
    resolver: zodResolver(personalInformationSchema),
  });

  return (
    <div className="grid gap-10 lg:grid-cols-3">

      {/* Left Side - Enrollment Form */}

      <div className="lg:col-span-2 space-y-10">

        <EnrollmentProgress currentStep={step} />

        {step === 1 && (
          <PersonalInformation
            register={register}
            errors={errors}
          />
        )}

        {step === 2 && <EducationInformation />}

        {step === 3 && <CourseSummary />}

        {step === 4 && <PaymentSummary />}

        {step === 5 && <ReviewInformation />}

        <NavigationButtons
          step={step}
          totalSteps={5}
          onNext={nextStep}
          onBack={previousStep}
        />

      </div>

      {/* Right Side - Course Summary */}

      <CourseSidebar
        title="Frontend Development"
        level="Beginner to Advanced"
        duration={6}
        totalFee={150000}
      />

    </div>
  );
}