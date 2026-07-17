interface Props {
  requirements: string[];
}

export default function CourseRequirements({
  requirements,
}: Props) {
  return (
    <section className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          Course Requirements
        </h2>

        <p className="text-gray-600 mt-2">
          Everything you need before joining.
        </p>

      </div>

      <ul className="space-y-4">

        {requirements.map((item) => (

          <li
            key={item}
            className="flex items-center gap-4 rounded-xl border p-5"
          >

            ✅

            <span>{item}</span>

          </li>

        ))}

      </ul>

    </section>
  );
}