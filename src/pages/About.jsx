import { useState, useEffect } from "react"

function About() {

  const calculateAge = () => {

    const birthday = new Date(2009, 7, 16)

    const today = new Date()

    let age = today.getFullYear() - birthday.getFullYear()

    const month = today.getMonth() - birthday.getMonth()

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birthday.getDate())
    ) {
      age--
    }

    return age
  }

  const getTimePeriod = () => {

    const now = new Date()

    const hour = now.toLocaleString("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      hour12: false
    })

    const currentHour = Number(hour)

    const day = now.toLocaleString("en-US", {
      timeZone: "America/New_York",
      weekday: "long"
    })

    // Saturday schedule
    if (day === "Saturday") {

      if (currentHour >= 22 || currentHour < 7) {
        return "sleep"
      }

      if (currentHour >= 7 && currentHour < 8) {
        return "breakfast"
      }

      if (currentHour >= 8 && currentHour < 11) {
        return "free"
      }

      if (currentHour >= 11 && currentHour < 12) {
        return "lunch"
      }

      if (currentHour >= 12 && currentHour < 18) {
        return "free"
      }

      if (currentHour >= 18 && currentHour < 19) {
        return "dinner"
      }

      return "free"
    }

    // Sunday schedule
    if (day === "Sunday") {

      if (currentHour >= 22 || currentHour < 7) {
        return "sleep"
      }

      if (currentHour >= 7 && currentHour < 8) {
        return "breakfast"
      }

      if (currentHour >= 8 && currentHour < 10) {
        return "free"
      }

      if (currentHour >= 10 && currentHour < 12) {
        return "church"
      }

      if (currentHour >= 12 && currentHour < 18) {
        return "free"
      }

      if (currentHour >= 18 && currentHour < 19) {
        return "dinner"
      }

      return "free"
    }

    // Monday–Friday schedule
    if (currentHour >= 22 || currentHour < 7) {
      return "sleep"
    }

    if (currentHour >= 7 && currentHour < 8) {
      return "breakfast"
    }

    if (currentHour >= 8 && currentHour < 14) {
      return "school"
    }

    if (currentHour >= 14 && currentHour < 18) {
      return "busy"
    }

    if (currentHour >= 18 && currentHour < 19) {
      return "dinner"
    }

    return "free"
  }

  const scheduleImages = {

    sleep: "/schedule/sleep.gif",

    breakfast: "/schedule/breakfast.gif",

    school: "/schedule/school.webp",

    busy: "/schedule/busy.png",

    lunch: "/schedule/lunch.webp",

    church: "/schedule/church.jpg",

    dinner: "/schedule/dinner.jpg",

    free: "/schedule/free.webp"
  }

  const scheduleNames = {

    sleep: "I'm Sleeping",

    breakfast: "Breakfast Time",

    school: "In School",

    busy: "Busy Right Now",

    lunch: "Lunch Time",

    church: "At Church",

    dinner: "Eating Dinner",

    free: "Free Time!"
  }

  const [age, setAge] = useState(calculateAge())

  const [time, setTime] = useState("")

  const [date, setDate] = useState("")

  const [timePeriod, setTimePeriod] = useState(getTimePeriod())

  useEffect(() => {

    const updateTime = () => {

      const currentTime = new Date()

      setTime(
        currentTime.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit"
        })
      )

      setDate(
        currentTime.toLocaleDateString("en-US", {
          timeZone: "America/New_York",
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        })
      )

      setTimePeriod(getTimePeriod())

      setAge(calculateAge())
    }

    updateTime()

    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <section id="about">

      <div className="about-box">

        <p className="about-label">ABOUT ME</p>

        <h1>So who the hell is bedguyz?</h1>

        <p>
          I'm {age} years old and I'm interested in gaming, a little bit of coding,
          and overall just fun stuff.
        </p>

        <p>
          I started getting into coding because I liked making games
          and eventually became interested in how the things I played
          were actually built.
        </p>

        <p>
          Outside of coding, I enjoy playing games, larping as saber yet again,
          or just trying know another game that I will probably never play.
        </p>

      </div>

      <div className="about-status">

        <div className="about-clock">

          <p className="current-date">{date}</p>

          <p>LOCAL TIME</p>

          <h2>{time}</h2>

          <span>New York</span>

        </div>

        <div className="schedule-box">

          <p className="schedule-label">CURRENTLY</p>

          <img
            className="schedule-image"
            src={scheduleImages[timePeriod]}
            alt={timePeriod}
          />

          <h2>{scheduleNames[timePeriod]}</h2>

        </div>

      </div>

    </section>
  )
}

export default About