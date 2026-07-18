"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { EnrollmentSchema } from "@/lib/validation/enrollment";

interface Props {
  register: UseFormRegister<EnrollmentSchema>;
  errors: FieldErrors<EnrollmentSchema>;
}

export default function GuardianInformation({ register, errors }: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-8">Guardian / Emergency Contact</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-medium">Guardian's Full Name</label>
          <input
            {...register("guardianName")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="Jane Doe"
          />
          {errors.guardianName && (
            <p className="mt-2 text-red-600 text-sm">{errors.guardianName.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Guardian's Phone Number</label>
          <input
            {...register("guardianPhone")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="+234..."
          />
          {errors.guardianPhone && (
            <p className="mt-2 text-red-600 text-sm">{errors.guardianPhone.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Relationship</label>
          <select
            {...register("guardianRelationship")}
            className="mt-2 w-full rounded-xl border p-3"
          >
            <option value="">Select Relationship</option>
            <option>Parent</option>
            <option>Sibling</option>
            <option>Spouse</option>
            <option>Relative</option>
            <option>Other</option>
          </select>
          {errors.guardianRelationship && (
            <p className="mt-2 text-red-600 text-sm">
              {errors.guardianRelationship.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="font-medium">Guardian's Address</label>
          <textarea
            {...register("guardianAddress")}
            className="mt-2 w-full rounded-xl border p-3"
            rows={4}
          />
          {errors.guardianAddress && (
            <p className="mt-2 text-red-600 text-sm">{errors.guardianAddress.message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
