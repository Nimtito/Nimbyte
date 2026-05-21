import { Link } from "react-router-dom"

import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"

function Navbar() {

  const {
    darkMode,
    toggleDarkMode,
    user,
    logout
  } = useContext(AuthContext)

  return (
    <nav className="bg-black text-white px-8 py-5">

      <div className="flex justify-between items-center">

        <h1 className="text-3xl font-bold text-blue-500">
          Nimbyte
        </h1>

        <div className="flex gap-6 items-center">

          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>

          <Link to="/dashboard">Dashboard</Link>

          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={logout}>
              Logout
            </button>
          )}

          <button
            onClick={toggleDarkMode}
            className="bg-blue-600 px-4 py-2 rounded-lg"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar