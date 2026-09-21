import { useForm, ValidationError } from "@formspree/react"
import { useEffect } from "react"

function Contact() {
  const [state, handleSubmit] = useForm("meaoqnpl")

  useEffect(() => {
    if (!state.succeeded) return

    const timer = setTimeout(() => {
      window.location.reload()
    }, 5000)

    return () => clearTimeout(timer)
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <section id="contact">
        <div className="contact-box">
          <p className="contact-label">MESSAGE SENT</p>
          <h1>Thanks!</h1>
          <p>Your message was sent successfully.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact">
      <div className="contact-links">

        <div className="contact-info">
          <p className="contact-label">GITHUB</p>

          <div className="github-title">
            <img src="/github.webp" alt="GitHub" />
            <h2>My Code</h2>
          </div>

          <p>
            Check out my projects and other stuff I might have built.
          </p>

          <a
            className="github-button"
            href="https://github.com/BedguyHeck"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>

        <div className="contact-info discord-info">
          <p className="contact-label">DISCORD</p>

          <div className="discord-title">
            <img src="/discord.png" alt="Discord" />
            <h2>Find Me</h2>
          </div>

          <p>
            You can also find me on Discord if you want to chat.
          </p>

          <div className="discord-copy">
            <p className="discord-username">
              Copy Discord Username →
            </p>

            <button
              className="discord-copy-button"
              onClick={() => {
                navigator.clipboard.writeText("bedguyz")
              }}
            >
              Copy
            </button>
          </div>
        </div>

      </div>

      <div className="contact-box">
        <p className="contact-label">CONTACT ME</p>

        <h1>Get In Touch</h1>

        <p>
          Have something to say? Send me a message and I'll get back to you.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            name="name"
            required
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            required
          />

          <ValidationError
            field="email"
            prefix="Email"
            errors={state.errors}
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            required
          />

          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

          {state.errors && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact