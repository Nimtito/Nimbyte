import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-black text-white p-4">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Nimbyte
        </h1>

        <div className="flex gap-4">

          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/login">Login</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar