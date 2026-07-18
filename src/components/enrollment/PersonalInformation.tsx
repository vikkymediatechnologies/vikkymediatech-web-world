"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface PersonalInformationData {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  state: string;
  country: string;
  address: string;
}

interface Props {
  register: UseFormRegister<PersonalInformationData>;
  errors: FieldErrors<PersonalInformationData>;
}

export default function PersonalInformation({
  register,
  errors,
}: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold mb-8">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-medium">Full Name</label>

          <input
            {...register("fullName")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="John Doe"
          />

          {errors.fullName && (
            <p className="mt-2 text-red-600 text-sm">
              {errors.fullName.message}
            </p>
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
            <p className="mt-2 text-red-600 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-medium">Phone Number</label>

          <input
            {...register("phone")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="+234..."
          />
        </div>

        <div>
          <label className="font-medium">Gender</label>

          <select
            {...register("gender")}
            className="mt-2 w-full rounded-xl border p-3"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Date of Birth</label>

          <input
            type="date"
            {...register("dateOfBirth")}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="font-medium">State</label>

          <input
            {...register("state")}
            className="mt-2 w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="font-medium">Country</label>

          <input
            {...register("country")}
            className="mt-2 w-full rounded-xl border p-3"
            defaultValue="Nigeria"
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-medium">
            Residential Address
          </label>

          <textarea
            {...register("address")}
            className="mt-2 w-full rounded-xl border p-3"
            rows={4}
          />
        </div>

      </div>

    </section>
  );
}