"use client";

interface Props {
  agreed: boolean;
  onAgreeChange: (agreed: boolean) => void;
  documentsComplete: boolean;
  submitError: string | null;
}

export default function FinalSubmission({
  agreed,
  onAgreeChange,
  documentsComplete,
  submitError,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-6">Final Submission</h2>

      <p className="text-gray-600 mb-6">
        You're about to submit your application. Please confirm below.
      </p>

      {!documentsComplete && (
        <p className="mb-6 rounded-xl bg-yellow-50 p-4 text-sm text-yellow-800">
          Your passport photograph and means of identification aren't
          uploaded yet — go back to the Documents step to add them before
          submitting.
        </p>
      )}

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => onAgreeChange(e.target.checked)}
          className="mt-1"
        />
        <span className="text-gray-700">
          I confirm that all the information provided is accurate, and I
          agree to Vikkymediatech Academy's enrollment terms.
        </span>
      </label>

      {submitError && (
        <p className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
          {submitError}
        </p>
      )}
    </section>
  );
}
