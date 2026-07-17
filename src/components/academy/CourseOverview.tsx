interface CourseOverviewProps {
  fullDescription: string;
}

export default function CourseOverview({
  fullDescription,
}: CourseOverviewProps) {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-6">
        Course Overview
      </h2>

      <div className="bg-white rounded-2xl border shadow-sm p-8">

        <p className="text-gray-700 leading-8">
          {fullDescription}
        </p>

      </div>

    </section>
  );
}