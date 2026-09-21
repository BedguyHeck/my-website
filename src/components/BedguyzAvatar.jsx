import { useState } from "react"

function BedguyzAvatar() {

  const [message, setMessage] = useState("Hey! Click on me for something random.")

  const messages = [
    "I DO NOT like coding and making random projects.",
    "My username is Bedguyz because... I'm the bald guy.",
    "Searching for a 2 week phase that doesn't exist.",
    "I play Doki Doki Literature Club, Limbus Company, and Roblox. Two truth one lie.",
    "Sometimes the WORST projects are the completely unnecessary ones.",
    "Coding is basically if it works dont touch it.",
    "Fun fact: this little guy is literally a Minecraft bed.",
    "What if the end goal for humanity is to kill god and become the new one?",
    "Lasciate ogne speranza, voi ch'intrate",
    "Is Wuthering Wave a Limbus reference?",
    "Wuthering Wave Street, Danganronpa Avenue, Jujustsu Shenenigan City, United State of Limbus",
    "I heard that a certain girl with purple eyes and lavendar hair is homeless.",
    "No Open No Close My brain is like a chicken",
    "Have some goddamn faith, I hear in avalon you can just pick mango trees all day.",
    "Cats that go to vietnam never come back...I hope no cats ever end up there"
  ]

  function randomMessage() {
    const random = Math.floor(Math.random() * messages.length)
    setMessage(messages[random])
  }

  return (
    <div className="bedguyz-avatar">

      <div className="avatar-bubble">
        {message}
      </div>

      <button onClick={randomMessage}>
        <img src="/bed.webp" alt="Bedguyz" />
      </button>

    </div>
  )
}

export default BedguyzAvatar