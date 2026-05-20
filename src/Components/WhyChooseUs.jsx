function WhyChooseUs() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto text-center">
      <h1 className="text-4xl font-bold">
        Why Choose Nimbyte?
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-14">

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600">
            Fast Delivery
          </h2>

          <p className="mt-4 text-gray-600">
            We deliver projects quickly and professionally.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600">
            Modern Design
          </h2>

          <p className="mt-4 text-gray-600">
            Clean and modern startup-level interfaces.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-600">
            Reliable Support
          </h2>

          <p className="mt-4 text-gray-600">
            Continuous support for growing businesses.
          </p>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs