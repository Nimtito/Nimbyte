import { createContext, useState } from "react"

// Create Context
export const AuthContext = createContext()

function AuthProvider({ children }) {

  // User state
  const [user, setUser] = useState(null)

  // Login function
  const login = () => {
    setUser({
      name: "Nimrod"
    })
  }

  // Logout function
  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }