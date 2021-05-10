import React from "react"

function socialLinks() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        color: "white",
      }}
    >
      <a style={{ color: "white" }} href={"https://twitter.com/compileswift"}>
        <p>Twitter &nbsp;|&nbsp;</p>
      </a>
      <a style={{ color: "white" }} href={"https://instagram.com/compileswift"}>
        <p>Instagram &nbsp;|&nbsp;</p>
      </a>
      <a style={{ color: "white" }} href={"https://patreon.com/compileswift"}>
        <p>Patreon &nbsp;|&nbsp;</p>
      </a>
      <a
        style={{ color: "white" }}
        href={
          "https://podcasts.apple.com/us/podcast/compile-swift/id1467065787"
        }
      >
        <p>Apple Podcasts&nbsp;|&nbsp;</p>
      </a>
      <a
        style={{ color: "white" }}
        href={"https://open.spotify.com/show/2RGHkl4UtYj0V7lPcRojzK"}
      >
        <p>Spotify Podcasts&nbsp;|&nbsp;</p>
      </a>
    </div>
  )
}

export default socialLinks
