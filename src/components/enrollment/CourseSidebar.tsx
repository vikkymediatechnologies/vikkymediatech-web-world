"use client";

interface Props {
  title: string;
  level: string;
  durationMonths: number;
  courseFee: number;
  depositAmount: number;
  balanceAmount: number;
}

export default function CourseSidebar({
  title,
  level,
  durationMonths,
  courseFee,
  depositAmount,
  balanceAmount,
}: Props) {
  return (
    <aside className="sticky top-28 rounded-3xl border bg-white p-8 shadow-lg h-fit">
      <h2 className="text-2xl font-bold">Course Summary</h2>

      <div className="mt-8 space-y-5">
        <div>
          <p className="text-sm text-gray-500">Course</p>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">Level</p>
          <h3 className="font-semibold">{level}</h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">Duration</p>
          <h3 className="font-semibold">{durationMonths} Months</h3>
        </div>
      </div>

      <hr className="my-8" />

      <div className="space-y-5">
        <div className="flex justify-between">
          <span>Total Fee</span>
          <strong>₦{courseFee.toLocaleString()}</strong>
        </div>

        <div className="flex justify-between text-green-600">
          <span>70% Deposit</span>
          <strong>₦{depositAmount.toLocaleString()}</strong>
        </div>

        <div className="flex justify-between">
          <span>Balance</span>
          <strong>₦{balanceAmount.toLocaleString()}</strong>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-blue-50 p-5">
        <p className="text-sm text-blue-800">
          Your admission becomes reserved immediately after the required 70%
          payment is confirmed.
        </p>
      </div>
    </aside>
  );
}
