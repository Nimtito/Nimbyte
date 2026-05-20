function ProjectCard({ title, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default ProjectCard