interface Props {
  technologies: string[];
}

export default function CourseTechnologies({
  technologies,
}: Props) {
  return (
    <section className="space-y-8">

      <div>
        <h2 className="text-3xl font-bold">
          Technologies You'll Learn
        </h2>

        <p className="text-gray-600 mt-2">
          Learn the modern technologies used by companies worldwide.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {technologies.map((tech) => (

          <div
            key={tech}
            className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
          >

            <div className="flex items-center gap-4">

              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">

                💻

              </div>

              <h3 className="font-semibold text-lg">
                {tech}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}