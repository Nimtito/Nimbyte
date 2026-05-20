import portfolio from "../../data/portfolio"
import ProjectCard from "../ProjectCard/ProjectCard"

function Portfolio() {
  return (
    <section className="px-8 py-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-center">
        Featured Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
        {portfolio.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio