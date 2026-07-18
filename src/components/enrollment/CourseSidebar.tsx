interface Props {
  title: string;
  level: string;
  duration: number;
  totalFee: number;
}

export default function CourseSidebar({
  title,
  level,
  duration,
  totalFee,
}: Props) {
  const deposit = Math.round(totalFee * 0.7);

  const balance = totalFee - deposit;

  return (
    <aside className="sticky top-28 rounded-3xl border bg-white p-8 shadow-lg h-fit">

      <h2 className="text-2xl font-bold">
        Course Summary
      </h2>

      <div className="mt-8 space-y-5">

        <div>

          <p className="text-sm text-gray-500">
            Course
          </p>

          <h3 className="font-semibold text-lg">
            {title}
          </h3>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Level
          </p>

          <h3 className="font-semibold">
            {level}
          </h3>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Duration
          </p>

          <h3 className="font-semibold">
            {duration} Months
          </h3>

        </div>

      </div>

      <hr className="my-8" />

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>Total Fee</span>

          <strong>
            ₦{totalFee.toLocaleString()}
          </strong>
        </div>

        <div className="flex justify-between text-green-600">

          <span>70% Deposit</span>

          <strong>
            ₦{deposit.toLocaleString()}
          </strong>

        </div>

        <div className="flex justify-between">

          <span>Balance</span>

          <strong>
            ₦{balance.toLocaleString()}
          </strong>

        </div>

      </div>

      <div className="mt-8 rounded-xl bg-blue-50 p-5">

        <p className="text-sm text-blue-800">

          Your admission becomes reserved immediately after the required
          70% payment is confirmed.

        </p>

      </div>

    </aside>
  );
}