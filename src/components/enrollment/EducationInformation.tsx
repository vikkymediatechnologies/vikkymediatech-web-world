"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { EnrollmentSchema } from "@/lib/validation/enrollment";

interface Props {
  register: UseFormRegister<EnrollmentSchema>;
  errors: FieldErrors<EnrollmentSchema>;
}

export default function EducationInformation({ register, errors }: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-8">Education Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-medium">Institution Attended</label>
          <input
            {...register("institution")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="e.g. University of Ibadan"
          />
          {errors.institution && (
            <p className="mt-2 text-red-600 text-sm">{errors.institution.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Highest Qualification</label>
          <select {...register("qualification")} className="mt-2 w-full rounded-xl border p-3">
            <option value="">Select Qualification</option>
            <option>Secondary School (SSCE)</option>
            <option>OND</option>
            <option>HND</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>Other</option>
          </select>
          {errors.qualification && (
            <p className="mt-2 text-red-600 text-sm">{errors.qualification.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Field of Study</label>
          <input
            {...register("fieldOfStudy")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="e.g. Computer Science"
          />
          {errors.fieldOfStudy && (
            <p className="mt-2 text-red-600 text-sm">{errors.fieldOfStudy.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium">Graduation Year</label>
          <input
            {...register("graduationYear")}
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="e.g. 2023"
          />
          {errors.graduationYear && (
            <p className="mt-2 text-red-600 text-sm">{errors.graduationYear.message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
