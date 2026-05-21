
import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./Layout/MainLayout"

import Home from "./Pages/Home"
import ServicesPage from "./Pages/ServicesPage"
import PortfolioPage from "./Pages/PortfolioPage"
import ContactPage from "./Pages/ContactPage"
import AboutPage from "./Pages/AboutPage"

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App