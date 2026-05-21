import { createContext, useState } from "react"

export const AuthContext = createContext()

function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  const [darkMode, setDarkMode] = useState(false)

  // Fake login
  const login = (email, password) => {

    if (email && password) {

      setUser({
        name: "Nimrod",
        email
      })

    }
  }

  // Logout
  const logout = () => {
    setUser(null)
  }

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)

    document.documentElement.classList.toggle("dark")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        darkMode,
        toggleDarkMode
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }