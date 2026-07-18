"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { EnrollmentSchema } from "@/lib/validation/enrollment";

interface Props {
  register: UseFormRegister<EnrollmentSchema>;
  errors: FieldErrors<EnrollmentSchema>;
}

export default function PersonalInformation({ register, errors }: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-8">Personal Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-medium">Full Name</label>
          <input
            {...register("fullName")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-2 text-red-600 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Email Address</label>
          <input
            {...register("email")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Phone Number</label>
          <input
            {...register("phone")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="+234..."
          />
          {errors.phone && (
            <p className="mt-2 text-red-600 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Gender</label>
          <select {...register("gender")} className="mt-2 w-full rounded-xl border p-3">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          {errors.gender && (
            <p className="mt-2 text-red-600 text-sm">{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Date of Birth</label>
          <input
            type="date"
            {...register("dateOfBirth")}
            className="mt-2 w-full rounded-xl border p-3"
          />
          {errors.dateOfBirth && (
            <p className="mt-2 text-red-600 text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">State</label>
          <input {...register("state")} className="mt-2 w-full rounded-xl border p-3" />
          {errors.state && (
            <p className="mt-2 text-red-600 text-sm">{errors.state.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Country</label>
          <input
            {...register("country")}
            className="mt-2 w-full rounded-xl border p-3"
            defaultValue="Nigeria"
          />
          {errors.country && (
            <p className="mt-2 text-red-600 text-sm">{errors.country.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="font-medium">Residential Address</label>
          <textarea
            {...register("address")}
            className="mt-2 w-full rounded-xl border p-3"
            rows={4}
          />
          {errors.address && (
            <p className="mt-2 text-red-600 text-sm">{errors.address.message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
