import { notFound } from "next/navigation";

import { courses } from "@/data/courses";

import CourseHero from "@/components/academy/CourseHero";
import CourseOverview from "@/components/academy/CourseOverview";
import CourseTechnologies from "@/components/academy/CourseTechnologies";
import CourseProjects from "@/components/academy/CourseProjects";
import CourseCareerPaths from "@/components/academy/CourseCareerPaths";
import CourseRequirements from "@/components/academy/CourseRequirements";
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

  const course = courses.find(
    (course) => course.slug === slug
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

      <CourseTechnologies
        technologies={course.technologies}
      />

      <CourseProjects
        projects={course.projects}
      />

      <CourseCareerPaths
        careerPaths={course.careerPaths}
      />

      <CourseRequirements
        requirements={course.requirements}
      />

      <CoursePricing
       slug={course.slug}
       title={course.title}
        durations={course.durations}
      />

    </main>
  );
}