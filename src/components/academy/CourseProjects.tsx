interface Props {
  projects: string[];
}

export default function CourseProjects({
  projects,
}: Props) {
  return (
    <section className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          Projects You'll Build
        </h2>

        <p className="text-gray-600 mt-2">
          Build a professional portfolio before graduation.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project) => (

          <div
            key={project}
            className="rounded-2xl border p-6 hover:border-blue-500 transition"
          >

            <h3 className="font-semibold text-xl">
              🚀 {project}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}