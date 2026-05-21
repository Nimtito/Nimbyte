import { useParams } from "react-router-dom"

function ProjectDetails() {

  // Get route parameter
  const { id } = useParams()

  return (
    <div className="p-10 text-center">

      <h1 className="text-4xl font-bold">
        Project Details
      </h1>

      <p className="mt-4 text-xl">
        Project ID: {id}
      </p>

    </div>
  )
}

export default ProjectDetails