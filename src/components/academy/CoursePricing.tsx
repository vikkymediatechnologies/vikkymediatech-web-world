"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

interface Duration {
  months: number;
  price: number;
}

interface Props {
  slug: string;
  title: string;
  durations: Duration[];
}

export default function CoursePricing({
  slug,
  title,
  durations,
}: Props) {
  const [selected, setSelected] = useState(durations[0]);

  const deposit = useMemo(
    () => Math.round(selected.price * 0.7),
    [selected]
  );

  const balance = useMemo(
    () => selected.price - deposit,
    [selected, deposit]
  );

  return (
    <section className="space-y-10">

      {/* Heading */}

      <div>
        <h2 className="text-3xl font-bold">
          Choose Your Learning Plan
        </h2>

        <p className="mt-2 text-gray-600">
          Select the duration that best suits your learning goals.
        </p>
      </div>

      {/* Duration Cards */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {durations.map((duration) => (
          <button
            key={duration.months}
            type="button"
            onClick={() => setSelected(duration)}
            className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
              selected.months === duration.months
                ? "border-blue-600 bg-blue-50 shadow-lg"
                : "border-gray-200 hover:border-blue-400 hover:shadow-md"
            }`}
          >
            <h3 className="text-2xl font-bold">
              {duration.months} Months
            </h3>

            <p className="mt-3 text-2xl font-semibold text-blue-700">
              ₦{duration.price.toLocaleString()}
            </p>

            {selected.months === duration.months && (
              <span className="mt-4 inline-flex rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
                Selected
              </span>
            )}
          </button>
        ))}

      </div>

      {/* Payment Summary */}

      <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">

        <div className="mb-8">
          <h3 className="text-2xl font-bold">
            Payment Summary
          </h3>

          <p className="mt-2 text-gray-600">
            Pay only <strong>70%</strong> to secure your admission.
            The remaining balance can be paid before the end of your training.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <p className="text-sm text-gray-500">
              Course Fee
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              ₦{selected.price.toLocaleString()}
            </h2>

          </div>

          <div className="rounded-2xl bg-green-50 p-6 shadow-sm">

            <p className="text-sm text-green-700">
              Initial Payment (70%)
            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-600">
              ₦{deposit.toLocaleString()}
            </h2>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <p className="text-sm text-gray-500">
              Remaining Balance
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              ₦{balance.toLocaleString()}
            </h2>

          </div>

        </div>

        {/* Selected Plan */}

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">

          <h4 className="text-lg font-semibold">
            Selected Course
          </h4>

          <p className="mt-2 text-gray-700">
            <strong>{title}</strong>
          </p>

          <p className="mt-1 text-gray-700">
            Duration:{" "}
            <strong>{selected.months} Months</strong>
          </p>

        </div>

        {/* CTA */}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          <Link
            href={`/academy/enroll/${slug}?duration=${selected.months}`}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Proceed to Enrollment →
          </Link>

          <button
            type="button"
            className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Download Course Brochure
          </button>

        </div>

      </div>

    </section>
  );
}