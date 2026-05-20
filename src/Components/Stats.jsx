import stats from "../../data/stats"

function Stats() {
  return (
    <section className="grid md:grid-cols-3 gap-8 px-8 py-16 max-w-6xl mx-auto">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h1 className="text-4xl font-bold text-blue-600">
            {stat.number}
          </h1>

          <p className="mt-3 text-gray-600">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats