import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}