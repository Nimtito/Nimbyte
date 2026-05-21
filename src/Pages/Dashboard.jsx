import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"

function Login() {

  const { login } = useContext(AuthContext)

  return (
    <div className="p-10 text-center">

      <h1 className="text-4xl font-bold mb-6">
        Login Page
      </h1>

      <button
        onClick={login}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Login
      </button>

    </div>
  )
}

export default Login