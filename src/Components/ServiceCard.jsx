function ServiceCard({ title, description }) {

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 hover:scale-105 transition-all duration-300">

      <h2 className="text-2xl font-bold mb-4 text-blue-600">
        {title}
      </h2>

      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </div>
  )
}

export default ServiceCard