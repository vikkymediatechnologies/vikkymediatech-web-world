import { notFound } from "next/navigation";
import { courses } from "@/data/courses";

import CourseHero from "@/components/academy/CourseHero";
import CourseOverview from "@/components/academy/CourseOverview";

interface Props {
  params: {
    slug: string;
  };
}

export default function CourseDetails({ params }: Props) {
  const course = courses.find(
    (course) => course.slug === params.slug
  );

  if (!course) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <CourseHero
        title={course.title}
        shortDescription={course.shortDescription}
        level={course.level}
        category={course.category}
        durations={course.durations}
      />

      <CourseOverview
        fullDescription={course.fullDescription}
      />
    </main>
  );
}