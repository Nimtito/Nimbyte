import services from "../data/services"

import ServiceCard from "../components/ServiceCard"

function Services() {

  return (
    <div className="py-20 px-8">

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold mb-6">

          Digital Services Designed For Growth

        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">

          At Nimbyte, we create modern technology solutions that help businesses scale, improve user experience, and establish strong digital presence in competitive markets.

        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (

          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
          />

        ))}

      </div>

    </div>
  )
}

export default Services