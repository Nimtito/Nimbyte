import { useContext, useState } from "react"

import { AuthContext } from "../context/AuthContext"

import { useNavigate } from "react-router-dom"

function Login() {

  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    login(email, password)

    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10 w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-center mb-4">

          Welcome Back

        </h1>

        <p className="text-center text-gray-500 mb-8">

          Login to access your Nimbyte dashboard and manage projects.

        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-4 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700"
        >

          Login

        </button>

      </form>
    </div>
  )
}

export default Login