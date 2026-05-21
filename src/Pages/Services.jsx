import services from "../data/services"

import ServiceCard from "../components/ServiceCard"

function Services() {

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

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