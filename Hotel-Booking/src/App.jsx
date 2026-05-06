import { useState } from "react"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [authOpen, setAuthOpen] = useState(false)

  const showHome = (href = "#") => {
    setAuthOpen(false)

    setTimeout(() => {
      if (href.startsWith("#") && href.length > 1) {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
        return
      }

      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 0)
  }

  const showAuth = () => {
    setAuthOpen(true)
  }

  return (
    <>
      <Navbar onNavClick={showHome} onGetStarted={showAuth}/>
      <Home/>
      <Footer/>
      {authOpen && <Auth onClose={() => setAuthOpen(false)}/>}
    </>
  )
}

export default App
