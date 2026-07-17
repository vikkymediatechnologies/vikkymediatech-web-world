import Link from "next/link";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold">
          Our Professional Courses
        </h1>

        <p className="mt-4 text-gray-600">
          Start your journey with Vikkymediatech Academy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {courses.map((course) => (

          <div
            key={course.id}
            className="rounded-2xl border shadow-sm hover:shadow-xl transition duration-300 p-6"
          >

            <h2 className="text-2xl font-bold mb-3">
              {course.title}
            </h2>

            <p className="text-gray-600 mb-5">
              {course.shortDescription}
            </p>

            <div className="space-y-2 mb-6">

              <p>
                <strong>Level:</strong> {course.level}
              </p>

              <p>
                <strong>Category:</strong> {course.category}
              </p>

            </div>

            <Link
              href={`/academy/courses/${course.slug}`}
              className="inline-flex px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
            >
              View Course
            </Link>

          </div>

        ))}

      </div>

    </main>
  );
}