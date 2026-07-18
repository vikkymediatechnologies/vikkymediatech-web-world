"use client";

import { Course } from "@/types/course";

interface Props {
  course: Course;
  durationMonths: number;
}

export default function CourseSummary({ course, durationMonths }: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-8">Course Summary</h2>

      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-500">Course</p>
          <h3 className="text-2xl font-semibold">{course.title}</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Level</p>
            <p className="font-medium">{course.level}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{durationMonths} Months</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500">About this course</p>
          <p className="mt-2 text-gray-700 leading-7">{course.short_description}</p>
        </div>
      </div>
    </section>
  );
}
