import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import EnrollmentLayout from "@/components/enrollment/EnrollmentLayout";

interface Props {
  params: Promise<{
    slug: string;
  }>;

  searchParams: Promise<{
    duration?: string;
  }>;
}

export default async function EnrollmentPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { duration } = await searchParams;

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      {/* Header */}

      <div className="mb-12">

        <h1 className="text-5xl font-bold">
          Student Enrollment
        </h1>

        <p className="mt-4 text-gray-600">
          Complete your application in a few simple steps.
        </p>

      </div>

      {/* Course Summary */}

      <div className="mb-10 rounded-3xl border bg-white p-8 shadow-sm">

        <h2 className="text-3xl font-bold">
          {course.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {course.shortDescription}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div>

            <p className="text-gray-500">
              Selected Duration
            </p>

            <h3 className="text-2xl font-bold">
              {duration ?? "Not Selected"} Months
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Course Level
            </p>

            <h3 className="text-2xl font-bold">
              {course.level}
            </h3>

          </div>

        </div>

      </div>

      {/* Enrollment Wizard */}

      <EnrollmentLayout />

    </main>
  );
}