import { useState } from "react"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [open, setOpen] = useState(false)

  const scrollTo = (href) => {
    const id = href.replace("#", "")
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      return
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const showHome = (href = "#") => {
    setOpen(false)
    scrollTo(href)
  }

  const showAuth = () => {
    setOpen(true)
  }

  return (
    <>
      <Navbar onNavClick={showHome} onGetStarted={showAuth}/>
      <Home/>
      <Footer/>
      {open && <Auth onClose={() => setOpen(false)}/>}
    </>
  )
}

export default App
