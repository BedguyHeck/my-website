import { NavLink, useNavigate, useLocation } from "react-router-dom"
import gsap from "gsap"
import { useRef, useEffect } from "react"

function Navbar({ transitionRef }) {
  const navigate = useNavigate()
  const location = useLocation()
  const transitioning = useRef(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const nav = document.querySelector("nav")

    function handleScroll() {
      const currentScrollY = window.scrollY

      if (transitioning.current) return

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        gsap.to(nav, {
          y: "-100%",
          duration: 0.35,
          ease: "power2.out"
        })
      } else {
        gsap.to(nav, {
          y: "0%",
          duration: 0.35,
          ease: "power2.out"
        })
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const nav = document.querySelector("nav")

    gsap.set(nav, {
      y: "0%"
    })

    lastScrollY.current = window.scrollY
  }, [location.pathname])

  function transitionTo(path) {
    if (transitioning.current) return
    if (location.pathname === path) return

    transitioning.current = true

    const transition = transitionRef.current

    document.body.style.overflow = "hidden"

    gsap.killTweensOf(transition)

    gsap.set(transition, {
      x: "-100vw",

      backgroundImage:
        path === "/"
          ? 'url("/transitions/home.jpg")'
          : path === "/about"
            ? 'url("/transitions/about.jpg")'
            : path === "/projects"
              ? 'url("/transitions/project.jpg")'
              : path === "/contact"
                ? 'url("/transitions/contact.jpeg")'
                : "none"
    })

    const timeline = gsap.timeline({
      onComplete: () => {
        transitioning.current = false
        document.body.style.overflow = ""
      }
    })

    timeline
      .to(transition, {
        x: "0vw",
        duration: 0.6,
        ease: "power2.inOut"
      })
      .call(() => {
        navigate(path)
      })
      .to(transition, {
        x: "100vw",
        duration: 0.6,
        delay: 0.2,
        ease: "power2.inOut"
      })
  }

  return (
    <nav>
      <h2>Bedguyz</h2>

      <div>
        <NavLink
          to="/"
          onClick={(e) => {
            e.preventDefault()
            transitionTo("/")
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={(e) => {
            e.preventDefault()
            transitionTo("/about")
          }}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          onClick={(e) => {
            e.preventDefault()
            transitionTo("/projects")
          }}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          onClick={(e) => {
            e.preventDefault()
            transitionTo("/contact")
          }}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar