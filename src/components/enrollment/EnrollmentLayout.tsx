"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEnrollment } from "@/hooks/useEnrollment";
import { saveEnrollment } from "@/lib/supabase/enrollment.service";
import { getErrorMessage } from "@/lib/get-error-message";
import {
  enrollmentSchema,
  EnrollmentSchema,
  stepFields,
  DOCUMENTS_STEP,
  FINAL_SUBMISSION_STEP,
  TOTAL_ENROLLMENT_STEPS,
} from "@/lib/validation/enrollment";
import { Course } from "@/types/course";

import EnrollmentProgress from "./EnrollmentProgress";
import PersonalInformation from "./PersonalInformation";
import EducationInformation from "./EducationInformation";
import GuardianInformation from "./GuardianInformation";
import DocumentUpload, { UploadedDocuments, EMPTY_DOCUMENTS } from "./DocumentUpload";
import CourseSummary from "./CourseSummary";
import PaymentSummary from "./PaymentSummary";
import ReviewInformation from "./ReviewInformation";
import FinalSubmission from "./FinalSubmission";
import NavigationButtons from "./NavigationButtons";
import CourseSidebar from "./CourseSidebar";

interface Props {
  course: Course;
  durationMonths: number;
}

export default function EnrollmentLayout({ course, durationMonths }: Props) {
  const router = useRouter();
  const { step, nextStep, previousStep } = useEnrollment();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
  const [documents, setDocuments] = useState<UploadedDocuments>(EMPTY_DOCUMENTS);
  const [agreed, setAgreed] = useState(false);

  const {
    register,
    trigger,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<EnrollmentSchema>({
    resolver: zodResolver(enrollmentSchema),
    mode: "onBlur",
  });

  const selectedDuration =
    course.course_durations.find((d) => d.months === durationMonths) ??
    course.course_durations[0];

  const courseFee = selectedDuration?.price ?? 0;
  const depositAmount = Math.round(courseFee * 0.7);
  const balanceAmount = courseFee - depositAmount;

  const documentsComplete = !!documents.passportUrl && !!documents.idDocumentUrl;

  const handleNext = async () => {
    setStepError(null);

    if (step === DOCUMENTS_STEP) {
      if (!documentsComplete) {
        setStepError(
          "Please upload your passport photograph and means of identification before continuing."
        );
        return;
      }
      nextStep();
      return;
    }

    const fieldsForStep = stepFields[step];
    if (!fieldsForStep) {
      // Course Summary / Payment Summary / Review — nothing to validate
      nextStep();
      return;
    }

    const valid = await trigger(fieldsForStep);
    if (valid) nextStep();
  };

  const onSubmit = async (data: EnrollmentSchema) => {
    setSubmitError(null);

    if (!documentsComplete) {
      setSubmitError("Passport photograph and means of identification are required.");
      return;
    }
    if (!agreed) {
      setSubmitError("Please confirm the agreement checkbox before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      await saveEnrollment({
        ...data,
        ...documents,
        courseId: course.id,
        durationMonths: selectedDuration.months,
        courseFee,
        depositAmount,
        balanceAmount,
      });
      router.push(`/academy/enroll/${course.slug}/success`);
    } catch (err) {
      console.error("Enrollment submission failed:", err);
      setSubmitError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10 lg:grid-cols-3">
      {/* Left Side - Enrollment Form */}
      <div className="lg:col-span-2 space-y-10">
        <EnrollmentProgress currentStep={step} />

        {step === 1 && <PersonalInformation register={register} errors={errors} />}
        {step === 2 && <EducationInformation register={register} errors={errors} />}
        {step === 3 && <GuardianInformation register={register} errors={errors} />}
        {step === DOCUMENTS_STEP && (
          <DocumentUpload
            documents={documents}
            onChange={setDocuments}
            stepError={stepError}
          />
        )}
        {step === 5 && (
          <CourseSummary course={course} durationMonths={selectedDuration.months} />
        )}
        {step === 6 && (
          <PaymentSummary
            courseFee={courseFee}
            depositAmount={depositAmount}
            balanceAmount={balanceAmount}
          />
        )}
        {step === 7 && (
          <ReviewInformation
            data={getValues()}
            documents={documents}
            courseTitle={course.title}
            durationMonths={selectedDuration.months}
            courseFee={courseFee}
            depositAmount={depositAmount}
          />
        )}
        {step === FINAL_SUBMISSION_STEP && (
          <FinalSubmission
            agreed={agreed}
            onAgreeChange={setAgreed}
            documentsComplete={documentsComplete}
            submitError={submitError}
          />
        )}

        <NavigationButtons
          step={step}
          totalSteps={TOTAL_ENROLLMENT_STEPS}
          onNext={handleNext}
          onBack={previousStep}
          submitting={submitting}
          canSubmit={step < FINAL_SUBMISSION_STEP || (agreed && documentsComplete)}
        />
      </div>

      {/* Right Side - Course Summary */}
      <CourseSidebar
        title={course.title}
        level={course.level}
        durationMonths={selectedDuration.months}
        courseFee={courseFee}
        depositAmount={depositAmount}
        balanceAmount={balanceAmount}
      />
    </form>
  );
}
