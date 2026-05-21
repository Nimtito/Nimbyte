import { useContext } from "react"

import { Navigate } from "react-router-dom"

import { AuthContext } from "../context/AuthContext"

function ProtectedRoute({ children }) {

  // Get user from context
  const { user } = useContext(AuthContext)

  // If no user redirect to login
  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute