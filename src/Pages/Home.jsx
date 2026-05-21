function Home() {
  return (
    <div>

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-black via-blue-900 to-black text-white min-h-screen flex items-center justify-center text-center px-6">

        <div>

          <h1 className="text-6xl font-bold mb-6">
            Building Smart Digital Solutions
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8">

            Nimbyte helps startups and businesses transform ideas into modern digital experiences through web development, UI/UX design, and scalable technology solutions.

          </p>

          <div className="flex justify-center gap-6">

            <button className="bg-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-700">

              Explore Services

            </button>

            <button className="border border-white px-8 py-4 rounded-lg text-lg">

              Get Started

            </button>

          </div>

        </div>

      </section>

      {/* About Section */}

      <section className="py-20 px-8 text-center">

        <h2 className="text-5xl font-bold mb-8">
          About Nimbyte
        </h2>

        <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300">

          Nimbyte is a modern digital solutions startup focused on helping businesses establish strong online presence through innovative web applications, responsive websites, and scalable digital systems.

        </p>

      </section>

    </div>
  )
}

export default Home