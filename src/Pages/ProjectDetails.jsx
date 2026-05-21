import { useParams } from "react-router-dom"

function ProjectDetails() {

  const { id } = useParams()

  return (
    <div className="py-20 text-center">

      <h1 className="text-5xl font-bold mb-6">
        Project Details
      </h1>

      <p className="text-2xl text-blue-600">

        Viewing Project ID: {id}

      </p>

    </div>
  )
}

export default ProjectDetails