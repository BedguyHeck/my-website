import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useRef, useEffect } from "react"

import Navbar from "./components/navbar"
import PageTransition from "./components/PageTransition"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  const transitionRef = useRef(null)

  useEffect(() => {
    const music = new Audio("/audio/avalon.mp3")

    music.loop = true
    music.volume = 0.7

    let musicStarted = false

    const startMusic = () => {
      if (musicStarted) return

      music.play()
        .then(() => {
          musicStarted = true

          document.removeEventListener("pointerdown", startMusic)
          document.removeEventListener("keydown", startMusic)
        })
        .catch(() => {
          // Browser blocked autoplay.
          // We will try again after user interaction.
        })
    }

    // Try to start immediately
    startMusic()

    // If autoplay is blocked, wait for interaction
    document.addEventListener("pointerdown", startMusic)
    document.addEventListener("keydown", startMusic)

    return () => {
      document.removeEventListener("pointerdown", startMusic)
      document.removeEventListener("keydown", startMusic)

      music.pause()
      music.currentTime = 0
    }
  }, [])

  return (
    <BrowserRouter>
      <PageTransition ref={transitionRef} />

      <Navbar transitionRef={transitionRef} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App