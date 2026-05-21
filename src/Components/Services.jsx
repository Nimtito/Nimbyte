import services from "../../Data/services"
import ServiceCard from "../ServiceCard/ServiceCard"

function Services() {
  return (
    <section className="px-8 py-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-center">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Services