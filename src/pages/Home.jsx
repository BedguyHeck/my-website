import { useEffect, useRef } from "react"

import BedguyzAvatar from "../components/BedguyzAvatar"

import gsap from "gsap"

function Home() {
  const cutsceneRef = useRef(null)
  const homeBackgroundRef = useRef(null)
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const homeRef = useRef(null)
  const lightRef = useRef(null)
  const flashRef = useRef(null)
  const topBarRef = useRef(null)
  const bottomBarRef = useRef(null)

  useEffect(() => {
    const navbar = document.querySelector("nav")
    const cutscene = cutsceneRef.current
    const homeBackground = homeBackgroundRef.current
    const text1 = text1Ref.current
    const text2 = text2Ref.current
    const home = homeRef.current
    const light = lightRef.current
    const flash = flashRef.current
    const topBar = topBarRef.current
    const bottomBar = bottomBarRef.current

    const hasPlayed = sessionStorage.getItem("avalonCutscenePlayed")

    if (hasPlayed) {
      document.body.style.overflow = ""

      gsap.set(navbar, {
        opacity: 1,
        y: 0,
        pointerEvents: "auto"
      })

      gsap.set(cutscene, {
        opacity: 0
      })

      gsap.set(homeBackground, {
        opacity: 1
      })

      gsap.set(text1, {
        opacity: 0
      })

      gsap.set(text2, {
        opacity: 0
      })

      gsap.set(home, {
        opacity: 1
      })

      gsap.set(light, {
        opacity: 0
      })

      gsap.set(flash, {
        opacity: 0
      })

      gsap.set(topBar, {
        opacity: 0
      })

      gsap.set(bottomBar, {
        opacity: 0
      })

      return
    }

    document.body.style.overflow = "hidden"

    gsap.set(navbar, {
      opacity: 0,
      y: -30,
      pointerEvents: "none"
    })

    gsap.set(cutscene, {
      opacity: 0
    })

    gsap.set(homeBackground, {
      opacity: 0
    })

    gsap.set(home, {
      opacity: 0
    })

    gsap.set(text1, {
      opacity: 0,
      y: 20
    })

    gsap.set(text2, {
      opacity: 0,
      y: 20
    })

    gsap.set(light, {
      opacity: 0
    })

    gsap.set(flash, {
      opacity: 1
    })

    gsap.set(topBar, {
      opacity: 1
    })

    gsap.set(bottomBar, {
      opacity: 1
    })

    const timeline = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("avalonCutscenePlayed", "true")
        document.body.style.overflow = ""
      }
    })

    timeline
      .to(flash, {
        opacity: 0,
        duration: 2.5,
        ease: "power2.out"
      })
      .to(cutscene, {
        opacity: 1,
        duration: 2.5,
        ease: "power2.out"
      })
      .to(
        light,
        {
          opacity: 0.35,
          duration: 2.5,
          ease: "power2.out"
        },
        "<"
      )
      .to(text1, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
      })
      .to(text1, {
        opacity: 0,
        y: -10,
        duration: 1.2,
        delay: 3,
        ease: "power2.in"
      })
      .to(text2, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
      })
      .to(text2, {
        opacity: 0,
        y: -10,
        duration: 1.2,
        delay: 3,
        ease: "power2.in"
      })
      .to(light, {
        opacity: 0.9,
        duration: 2,
        ease: "power2.in"
      })
      .to(
        flash,
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.in"
        },
        "<"
      )
      .to(homeBackground, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
      })
      .to(
        cutscene,
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        },
        "<"
      )
      .to(
        topBar,
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        },
        "<"
      )
      .to(
        bottomBar,
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        },
        "<"
      )
      .to(flash, {
        opacity: 0,
        duration: 2,
        ease: "power2.out"
      })
      .to(
        light,
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.out"
        },
        "<"
      )
      .to(
        home,
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out"
        },
        "<"
      )
      .to(navbar, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        pointerEvents: "auto"
      })

    return () => {
      timeline.kill()
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <section id="home">
      <div
        className="cutscene-background"
        ref={cutsceneRef}
      ></div>

      <div
        className="home-background"
        ref={homeBackgroundRef}
      ></div>

      <div
        className="cinematic-light"
        ref={lightRef}
      ></div>

      <div
        className="flash"
        ref={flashRef}
      ></div>

      <div
        className="letterbox top"
        ref={topBarRef}
      ></div>

      <div
        className="letterbox bottom"
        ref={bottomBarRef}
      ></div>

      <div className="intro">
        <p ref={text1Ref}>
          I'm... at Avalon?
        </p>

        <p ref={text2Ref}>
          I can finally... rest.
        </p>
      </div>

      <div
        className="actual-home"
        ref={homeRef}
      >
        <div className="home-box">
          <p className="welcome">
            WELCOME
          </p>

          <h1>
            Hey, I'm Bedguyz!
          </h1>

          <h2>
            Welcome to Avalon!
          </h2>

          <p>
            Yeah, this is the place all bedguyz in their mirror worlds go to.
          </p>

          <p>
            Its like a nice spot for retirement, don't you think?
          </p>

          <p>
            Although how the hell did you end up here?
          </p>
        </div>

        <BedguyzAvatar />
      </div>
    </section>
  )
}

export default Home