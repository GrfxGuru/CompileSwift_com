import React from "react"

function socialLinks() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          justifyContent: "center",
        }}
      >
        <a style={{ color: "white" }} href={"https://twitter.com/compileswift"}>
          <p>Twitter&nbsp;|&nbsp;</p>
        </a>
        <a
        style={{ color: "white" }}
        href={"https://facebook.com/compilesw"}
        >
        <p>Facebook&nbsp;|&nbsp;</p>
        </a>
        <a
          style={{ color: "white" }}
          href={"https://instagram.com/compileswift"}
        >
          <p>Instagram</p>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          justifyContent: "center",
        }}
      >
        <a
          style={{ color: "white" }}
          href={
            "https://podcasts.apple.com/us/podcast/compile-swift/id1467065787"
          }
        >
          <img
            src="/images/podcast-players/listen-apple.png"
            style={{ height: 36 }}
          />
          &nbsp;&nbsp;
        </a>
        <a
          style={{ color: "white" }}
          href={"https://open.spotify.com/show/2RGHkl4UtYj0V7lPcRojzK"}
        >
          <img
            src="/images/podcast-players/listen-spotify.png"
            style={{ height: 36 }}
          />
        </a>
      </div>
    </div>
  )
}

export default socialLinks
