import { Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ProtectedRoute from "./Components/ProtectedRoute"

import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import ProjectDetails from "./Pages/ProjectDetails"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route */}
        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App