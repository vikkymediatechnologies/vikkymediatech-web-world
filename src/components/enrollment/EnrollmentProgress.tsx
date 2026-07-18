"use client";

interface Props {
  currentStep: number;
}

const steps = [
  "Personal",
  "Education",
  "Guardian",
  "Documents",
  "Course",
  "Payment",
  "Review",
  "Submit",
];

export default function EnrollmentProgress({ currentStep }: Props) {
  return (
    <div className="mb-12">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center flex-1">
            <div
              className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm ${
                index + 1 <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>
            <p className="mt-2 text-xs text-center">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
