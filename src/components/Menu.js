import React from "react"
import { Link } from "gatsby"

import { scale, rhythm } from "../utils/typography"

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
            marginRight: rhythm(1),
          }}
          to={m.path}
        >
          <p>{m.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default Menu
