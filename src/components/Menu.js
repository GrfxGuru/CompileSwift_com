import React from "react"
import { Link } from "gatsby"

import { scale } from "../utils/typography"

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Podcast",
    path: "/podcast",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

function Menu() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {menuItems.map(m => (
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            textTransform: "uppercase",
            letterSpacing: 1,
            color: "white",
            ...scale(0 / 5),
            marginRight: 20,
          }}
          to={m.path}
        >
          <p>{m.name}</p>
        </Link>
      ))}
      <a style={{
        boxShadow: `none`,
        textDecoration: `none`,
        textTransform: "uppercase",
        letterSpacing: 1,
        color: "white",
        ...scale(0 / 5),
        marginRight: 20,
      }} href={"https://mailchi.mp/9e0f70c40b39/cswift"}>MAILING LIST</a>
    </div>
  )
}

export default Menu
