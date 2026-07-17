interface Duration {
  months: number;
  price: number;
}

interface CourseHeroProps {
  title: string;
  shortDescription: string;
  level: string;
  category: string;
  durations: Duration[];
}

export default function CourseHero({
  title,
  shortDescription,
  level,
  category,
  durations,
}: CourseHeroProps) {
  const startingPrice = durations[0]?.price ?? 0;

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-10 shadow-xl">
      <div className="max-w-5xl">

        <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
          {category}
        </span>

        <h1 className="text-5xl font-bold leading-tight mb-5">
          {title}
        </h1>

        <p className="text-blue-100 text-lg max-w-3xl mb-8">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-white/15 px-4 py-2 rounded-full">
            📘 {level}
          </span>

          <span className="bg-white/15 px-4 py-2 rounded-full">
            🎓 Certificate Included
          </span>

          <span className="bg-white/15 px-4 py-2 rounded-full">
            💼 Industry Projects
          </span>

          <span className="bg-white/15 px-4 py-2 rounded-full">
            👨‍🏫 Mentorship
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6">

          <div>
            <p className="text-blue-200">
              Starting From
            </p>

            <h2 className="text-4xl font-bold">
              ₦{startingPrice.toLocaleString()}
            </h2>
          </div>

          <button className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition">
            Enroll Now →
          </button>

        </div>

      </div>
    </section>
  );
}