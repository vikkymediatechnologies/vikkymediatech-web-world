"use client";

interface Props {
  courseFee: number;
  depositAmount: number;
  balanceAmount: number;
}

export default function PaymentSummary({
  courseFee,
  depositAmount,
  balanceAmount,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-8">Payment Summary</h2>

      <p className="text-gray-600 mb-8">
        You'll pay <strong>70%</strong> now to secure your admission. The
        remaining balance is due before the end of your training.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-gray-50 p-6">
          <p className="text-sm text-gray-500">Course Fee</p>
          <h3 className="mt-2 text-2xl font-bold">₦{courseFee.toLocaleString()}</h3>
        </div>

        <div className="rounded-2xl bg-green-50 p-6">
          <p className="text-sm text-green-700">Initial Payment (70%)</p>
          <h3 className="mt-2 text-2xl font-bold text-green-600">
            ₦{depositAmount.toLocaleString()}
          </h3>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6">
          <p className="text-sm text-gray-500">Remaining Balance</p>
          <h3 className="mt-2 text-2xl font-bold">₦{balanceAmount.toLocaleString()}</h3>
        </div>
      </div>
    </section>
  );
}
