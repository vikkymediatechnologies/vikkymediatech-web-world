interface Props {
  careerPaths: string[];
}

export default function CourseCareerPaths({
  careerPaths,
}: Props) {
  return (
    <section className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          Career Opportunities
        </h2>

        <p className="text-gray-600 mt-2">
          Possible roles after completing this program.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {careerPaths.map((career) => (

          <div
            key={career}
            className="rounded-xl bg-blue-50 border border-blue-100 p-6"
          >

            <h3 className="font-semibold">

              💼 {career}

            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}