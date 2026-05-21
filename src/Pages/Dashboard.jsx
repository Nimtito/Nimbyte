import { useContext } from "react"

import { ProjectContext } from "../context/ProjectContext"

import { Link } from "react-router-dom"

function Dashboard() {

  const { projects } = useContext(ProjectContext)

  return (
    <div className="py-20 px-8">

      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-4">
          Client Dashboard
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300">

          Track projects, monitor progress, and manage digital services in one place.

        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl"
          >

            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="mb-4 text-blue-600">
              Status: {project.status}
            </p>

            <Link
              to={`/project/${project.id}`}
              className="bg-blue-600 text-white px-5 py-3 rounded-lg inline-block"
            >

              View Details

            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Dashboard