import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0">
      <h1 className="text-3xl font-bold text-blue-600">
        Nimbyte
      </h1>

      <div className="flex gap-6 font-medium text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar