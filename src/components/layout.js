import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import { rhythm, scale } from "../utils/typography"
import CSLogo from "./cs-logo"

import Menu from "./Menu"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <div
        style={{
          backgroundColor: "#f57738",
          paddingTop: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `white`,
            display: "flex",
            justifyContent: "center",
          }}
          to={`/`}
        >
          <CSLogo />
          <h1
            style={{
              ...scale(2 / 2.25),
              fontWeight: "bold",
              marginLeft: 20,
              marginRight: 80,
              marginTop: 5,
            }}
          >
            {title}
          </h1>
        </Link>
        <Menu />
      </div>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <Headroom>
          <header>{header}</header>
        </Headroom>

        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    )
  }
}

export default Layout
