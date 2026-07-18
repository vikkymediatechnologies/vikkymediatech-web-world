import { notFound } from "next/navigation";

import { getCourse } from "@/lib/supabase/courses";

import EnrollmentLayout from "@/components/enrollment/EnrollmentLayout";

interface Props {
  params: Promise<{
    slug: string;
  }>;

  searchParams: Promise<{
    duration?: string;
  }>;
}

export default async function EnrollmentPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { duration } = await searchParams;

  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  const durationMonths = duration
    ? Number(duration)
    : course.course_durations[0]?.months ?? 0;

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold">Student Enrollment</h1>
        <p className="mt-4 text-gray-600">
          Complete your application in a few simple steps.
        </p>
      </div>

      <EnrollmentLayout course={course} durationMonths={durationMonths} />
    </main>
  );
}
