"use client";

interface Props {
  step: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}

export default function NavigationButtons({
  step,
  totalSteps,
  onNext,
  onBack,
}: Props) {
  return (
    <div className="mt-10 flex justify-between">

      <button
        type="button"
        onClick={onBack}
        disabled={step === 1}
        className="rounded-xl border px-6 py-3 disabled:opacity-40"
      >
        Back
      </button>

      {step < totalSteps ? (
        <button
          type="button"
          onClick={onNext}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="rounded-xl bg-green-600 px-6 py-3 text-white"
        >
          Submit Application
        </button>
      )}

    </div>
  );
}