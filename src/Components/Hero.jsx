import heroImage from "../../assets/images/hero-image.png"

function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center px-8 py-20 max-w-7xl mx-auto">
      <div>
        <h1 className="text-5xl font-bold leading-tight text-gray-800">
          Building Smart Digital Solutions For Businesses
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          We build websites, mobile applications and scalable IT solutions.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Get Started
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl">
            View Services
          </button>
        </div>
      </div>

      <div>
        <img
          src={heroImage}
          alt="Hero"
          className="w-full"
        />
      </div>
    </section>
  )
}

export default Hero