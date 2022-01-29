import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import { scale } from "../utils/typography"
import CSLogo from "./cs-logo"
import { Card, CardContent } from "ui-neumorphism"
import "ui-neumorphism/dist/index.css"

import Menu from "./Menu"
import SocialLinks from "../components/SocialLinks"

import "../assets/darkmode.css"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <div
        style={{
          backgroundColor: "#f57738",
          paddingTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
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
        </Link>
        <br />
        <SocialLinks />
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

        <main >{children}</main>
        {
          <footer
            style={{ textAlign: "center", paddingTop: 10, paddingBottom: 10 }}
          >
            <div>
              <a rel="me" href="https://mastodon.online/@compileswift">
                Mastodon
              </a>{" "}
              {` | `}
              <a href="https://twitter.com/compileswift">Twitter</a> {` | `}
              <a href="https://youtube.com/grfxg">YouTube</a> {` | `}
              <a href="https://instagram.com/compileswift">Instagram</a>
            </div>
            <div style={{ paddingTop: 20, fontSize: 10 }}>
              © {new Date().getFullYear()} Peter Witham, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </footer>
        }
      </div>
    )
  }
}

export default Layout
