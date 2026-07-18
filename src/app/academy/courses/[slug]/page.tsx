import { notFound } from "next/navigation";

import { getCourse } from "@/lib/supabase/courses";

import CourseHero from "@/components/academy/CourseHero";
import CourseOverview from "@/components/academy/CourseOverview";
import CoursePricing from "@/components/academy/CoursePricing";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetails({
  params,
}: Props) {
  const { slug } = await params;

  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">

      {/* Hero Section */}

      <CourseHero
        title={course.title}
        shortDescription={course.short_description}
        level={course.level}
        category={course.category}
        durations={course.course_durations}
      />

      {/* Course Overview */}

      <CourseOverview
        fullDescription={course.full_description}
      />

      {/* Pricing */}

      <CoursePricing
        slug={course.slug}
        title={course.title}
        durations={course.course_durations}
      />

    </main>
  );
}