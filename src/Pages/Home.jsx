import Hero from "../components/Hero/Hero"
import Stats from "../components/Stats/Stats"
import Services from "../components/Services/Services"
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs"
import Portfolio from "../components/Portfolio/Portfolio"
import CTASection from "../components/CTASection/CTASection"
import ContactPreview from "../components/ContactPreview/ContactPreview"

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <CTASection />
      <ContactPreview />
    </div>
  )
}

export default Home