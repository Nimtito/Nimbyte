function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 duration-300">
      <img
        src={image}
        alt={title}
        className="w-20 mx-auto"
      />

      <h2 className="text-2xl font-bold mt-6">
        {title}
      </h2>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">
        Learn More
      </button>
    </div>
  )
}

export default ServiceCard